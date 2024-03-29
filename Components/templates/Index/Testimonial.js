import TestimonialCard from "@/Components/modules/TestimonialCard";
import React from "react";

export default function Testimonial({comments}) {
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
          {comments.slice(0,3).map((comment, index) => (
            <TestimonialCard key={index} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
