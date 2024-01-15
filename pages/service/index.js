import Header from "@/Components/modules/Header";
import ServiceComponnent from "@/Components/templates/Index/Services";
import React from "react";

export default function Service() {
  return (
    <>
      <Header prevPage="Home" currentPage="Service" />
      <ServiceComponnent />
    </>
  );
}
