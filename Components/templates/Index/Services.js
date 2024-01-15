import ServiceCard from "@/Components/modules/ServiceCard/ServiceCard";
import {
  faAward,
  faCoffee,
  faTable,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const services = [
  {id: "1", src:"img/service-1.jpg", title:"Fastest Door Delivery", details:"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor", icon:faTruck},
  {id: "2", src:"img/service-2.jpg", title:"Fresh Coffee Beans", details:"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor", icon:faCoffee},
  {id: "3", src:"img/service-3.jpg", title:"Best Quality Coffee", details:"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor", icon:faAward},
  {id: "4", src:"img/service-4.jpg", title:"Online Table Booking", details:"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor", icon:faTable},
]

export default function Services() {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          {
            services.map(service=> <ServiceCard key={service.id} {...service} />)
          }
        </div>
      </div>
    </div>
  );
}
