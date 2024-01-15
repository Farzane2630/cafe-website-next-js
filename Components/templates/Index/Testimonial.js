import TestimonialCard from "@/Components/modules/TestimonialCard";
import React from "react";

const testimonials = [
  {
    src: "img/testimonial-1.jpg",
    clientName: "Client Name",
    comment:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
    profession: "Profession",
  },
  {
    src: "img/testimonial-2.jpg",
    clientName: "Client Name",
    comment:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
    profession: "Profession",
  },
  {
    src: "img/testimonial-3.jpg",
    clientName: "Client Name",
    comment:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
    profession: "Profession",
  },
  {
    src: "img/testimonial-4.jpg",
    clientName: "Client Name",
    comment:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
    profession: "Profession",
  },
];

export default function Testimonial() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{letterSpacing: "5px"}}
          >
            Testimonial
          </h4>
          <h1 className="display-4">Our Clients Say</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {testimonials.map((comment, index) => (
            <TestimonialCard key={index} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
