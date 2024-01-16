import Header from "@/Components/modules/Header";
import ServiceComponnent from "@/Components/templates/Index/Services";
import React from "react";

export default function Service({services}) {
  return (
    <>
      <Header prevPage="Home" currentPage="Service" />
      <ServiceComponnent services={services} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/services");
  const services = await res.json();
  return {
    props: {
      services,
    },
  };
}
