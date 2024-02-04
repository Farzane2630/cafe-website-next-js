import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const route = useRouter();

  async function searchHandler(data) {
    if (data.searchValue.trim()) {
      route.push(`/search?q=${data.searchValue}`);
      reset()
    }
    console.log(data.searchValue);
  }

  return (
    <div className="container-fluid p-0 nav-bar">
      <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
        <Link href="/" className="navbar-brand px-lg-4 m-0">
          <h1 className="m-0 display-4 text-uppercase text-white">
            WELLCOME 👋
          </h1>
        </Link>

        <form onSubmit={handleSubmit(searchHandler)}>
          <input
            {...register("searchValue", { required: true })}
            type="text"
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              color:"#fff"
            }}
            placeholder="Search..."
          />
          <button
            type="submit"
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
          >
            <FontAwesomeIcon color="#fff" icon={faSearch} />
          </button>
        </form>

        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto p-4">
            <Link href="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link href="about" className="nav-item nav-link">
              About
            </Link>
            <Link href="service" className="nav-item nav-link">
              Service
            </Link>
            <Link href="menu" className="nav-item nav-link">
              Menu
            </Link>
            <div
              className="nav-item dropdown"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="nav-link dropdown-toggle" data-toggle="dropdown">
                Pages
              </div>
              {isOpen ? (
                <div className="dropdown-menu text-capitalize">
                  <Link href="reservation" className="dropdown-item">
                    Reservation
                  </Link>
                  <Link href="testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                </div>
              ) : null}
            </div>
            <Link href="contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
