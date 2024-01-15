import React from 'react'

export default function TestimonialCard({src, clientName, profession, comment}) {
  return (
   <div className="testimonial-item">
   <div className="d-flex align-items-center mb-3">
       <img className="img-fluid" src={src} alt="" />
       <div className="ml-3">
           <h4>{clientName}</h4>
           <i>{profession}</i>
       </div>
   </div>
   <p className="m-0">{comment}</p>
</div>
  )
}
