import Header from "@/Components/modules/Header";
import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function sendMessage(data) {
    const res = await fetch("https://luck-clever-sunshine.glitch.me/messages", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      alert("✔ your Message is resieved successfully!");
      reset();
    } else {
      alert(
        "❌ Something went wrong! please check your network and try again."
      );
    }
  }

  return (
    <>
      <Header prevPage="Home" currentPage="Contact" />

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Contact Us
            </h4>
            <h1 className="display-4">Feel Free To Contact</h1>
          </div>
          <div className="row px-3 pb-2">
            <div className="col-sm-4 text-center mb-3">
              <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Address</h4>
              <p>123 Street, New York, USA</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Phone</h4>
              <p>+012 345 6789</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Email</h4>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pb-5">
              <iframe
                style={{ width: "100%", height: "443px", border: "none" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div className="col-md-6 pb-5">
              <div className="contact-form">
                <div id="success"></div>
                <form onSubmit={handleSubmit(sendMessage)}>
                  <div className="control-group">
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      className="form-control bg-transparent p-4"
                      placeholder="Your Name"
                      data-validation-required-message="Please enter your name"
                    />
                    <p className="help-block text-danger"></p>
                    {errors.name && (
                      <p style={{ background: "#fff" }}>❌ Name is required.</p>
                    )}
                  </div>
                  <div className="control-group">
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="form-control bg-transparent p-4"
                      placeholder="Your Email"
                      data-validation-required-message="Please enter your email"
                    />
                    <p className="help-block text-danger"></p>
                    {errors.email && (
                      <p style={{ background: "#fff" }}>
                        ❌ Email is required.
                      </p>
                    )}
                  </div>
                  <div className="control-group">
                    <input
                      {...register("subject")}
                      type="text"
                      className="form-control bg-transparent p-4"
                      placeholder="Subject"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      {...register("message", { required: true })}
                      className="form-control bg-transparent py-3 px-4"
                      rows="5"
                      placeholder="Message"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                    {errors.message && (
                      <p style={{ background: "#fff" }}>
                        ❌ Please write a message.
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      className="btn btn-primary font-weight-bold py-3 px-5"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
