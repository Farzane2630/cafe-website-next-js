import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Reservation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function submitForm(data) {
    const reserve = await fetch("https://json-server-vercel-liart-iota.vercel.app/reservation", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (reserve.status === 201) {
      alert("✔ your reservation is confirmed successfully!");
      reset();
    } else {
      alert(
        "❌ Something went wrong! please check your information and try again."
      );
    }
  }

  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <div className="row align-items-center">
            <div className="col-lg-6 my-5 my-lg-0">
              <div className="p-5">
                <div className="mb-4">
                  <h1 className="display-3 text-primary">30% OFF</h1>
                  <h1 className="text-white">For Online Reservation</h1>
                </div>
                <p className="text-white">
                  Lorem justo clita erat lorem labore ea, justo dolor lorem
                  ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                  sed sed diam. Ea et erat ut sed diam sea
                </p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-center p-5"
                style={{ background: "rgba(51, 33, 29, .8)" }}
              >
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                <form className="mb-5" onSubmit={handleSubmit(submitForm)}>
                  <div className="form-group">
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Name"
                    />
                    {errors.name && <p style={{background: "#fff"}}>Name is required.</p>}
                  </div>
                  <div className="form-group">
                    <input
                      {...register("emailOrPhone", { required: true })}
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Email or Phone"
                    />
                    {errors.emailOrPhone && <p style={{background: "#fff"}}>Enter a phone or email.</p>}
                  </div>
                  <div className="form-group">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        {...register("date", { required: true })}
                        type="date"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                      />
                      {errors.date && <p style={{background: "#fff"}}>Date is required.</p>}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        {...register("time", { required: true })}
                        type="time"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                      />
                      {errors.time && <p style={{background: "#fff"}}>Time is required.</p>}
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select bg-transparent border-primary px-4"
                      {...register("person")}
                      style={{ height: "49px" }}
                    >
                      <option defaultValue>Person</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
