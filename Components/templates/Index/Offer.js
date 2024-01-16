import Form from "@/Components/modules/Form/Form";
import React from "react";
import { useForm } from "react-hook-form";

export default function Offer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function addEmail(data) {
    const res = await fetch("http://localhost:4000/offers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      alert("🎉 You have Joined Successfully! ;)) ✔");
      reset();
    }
  }
  return (
    <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
      <div className="container py-5">
        <h1 className="display-3 text-primary mt-3">50% OFF</h1>
        <h1 className="text-white mb-3">Sunday Special Offer</h1>
        <h4 className="text-white font-weight-normal mb-4 pb-3">
          Only for Sunday from 1st Jan to 30th Jan 2024
        </h4>
        <Form
          submitForm={addEmail}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          reset={reset}
        />
      </div>
    </div>
  );
}
