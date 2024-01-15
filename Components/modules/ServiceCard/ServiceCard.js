import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ServiceCard({src, title, details, icon}) {
  return (
    <div className="col-lg-6 mb-5">
    <div className="row align-items-center">
      <div className="col-sm-5">
        <img
          className="img-fluid mb-3 mb-sm-0"
          src={src}
          alt=""
        />
      </div>
      <div className="col-sm-7">
        <h4>
          <div className="service-icon">
            <FontAwesomeIcon
              icon={icon}
              className="fa fa-truck"
              size="sm"
            />
          </div>{" "}
          {title}
        </h4>
        <p className="m-0">
          {details}
        </p>
      </div>
    </div>
  </div>
  )
}
