import React from "react";

export default function TestimonialCard({
  profile,
  userName,
  productID,
  body,
}) {
  return (
    <div className="testimonial-item">
      <div className="d-flex align-items-center mb-3">
        <img className="img-fluid" src={profile} alt="" />
        <div className="ml-3">
          <h4>{userName}</h4>
          <p className="m-0">{body}</p>
          {/* <i>{profession}</i> */}
        </div>
      </div>
    </div>
  );
}
