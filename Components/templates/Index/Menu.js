import ProductCard from "@/Components/modules/ProductCard/ProductCard";
import React from "react";

const products = [
  {
    price: "5",
    src: "img/menu-1.jpg",
    productName: "Black Coffee",
    details:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    price: "7",
    src: "img/menu-2.jpg",
    productName: "Chocolete Coffee",
    details:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    price: "10",
    src: "img/menu-3.jpg",
    productName: "Coffee With Milk",
    details:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
];

export default function Menu() {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Menu & Pricing
          </h4>
          <h1 className="display-4">Competitive Pricing</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>
            {products.map((coffe, index) => (
              <ProductCard key={index} {...coffe} />
            ))}
          </div>
          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>
            {products.map((coffe, index) => (
              <ProductCard key={index} {...coffe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
