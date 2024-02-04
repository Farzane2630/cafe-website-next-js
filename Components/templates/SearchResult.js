import React from "react";
import ProductCard from "../modules/Products/ProductCard";

function Result( {searchResult} ) {
  console.log(searchResult);
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
           Search Results
          </h4>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {searchResult.map((coffe, index) => (
              <ProductCard key={index} {...coffe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
