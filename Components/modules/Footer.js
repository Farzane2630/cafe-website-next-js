import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useForm } from "react-hook-form";
import Form from "./Form/Form";


export default function Footer() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function addEmail(data) {
    const res = await fetch("https://json-server-vercel-liart-iota.vercel.app/newsLetters", {
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
    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
      <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Get In Touch
          </h4>
          <p>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="fa fa-map-marker-alt mr-2"
            />{" "}
            123 Street, New York, USA
          </p>
          <p>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="fa fa-phone-alt mr-2"
            />{" "}
            +012 345 67890
          </p>
          <p className="m-0">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="fa fa-envelope mr-2"
            />{" "}
            info@example.com
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Follow Us
          </h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <div className="d-flex justify-content-start">
            <Link
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" />
            </Link>
            <Link
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f" />
            </Link>
            <Link
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="fab fa-linkedin-in" />
            </Link>
            <Link
              className="btn btn-lg btn-outline-light btn-lg-square"
              href="#"
            >
              <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Open Hours
          </h4>
          <div>
            <h6 className="text-white text-uppercase">Monday - Friday</h6>
            <p>8.00 AM - 8.00 PM</p>
            <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Newsletter
          </h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <Form
          submitForm={addEmail}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          reset={reset}
        />
        </div>
      </div>
      <div
        className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <p className="mb-2 text-white">
          Copyright &copy;{" "}
          <Link className="font-weight-bold" href="#">
            Domain
          </Link>
          . All Rights Reserved.
        </p>
        <p className="m-0 text-white">
          Designed by{" "}
          <Link className="font-weight-bold" href="https://htmlcodex.com">
            HTML Codex
          </Link>
        </p>
      </div>
    </div>
  );
}

