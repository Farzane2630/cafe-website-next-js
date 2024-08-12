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
  const res = await fetch("https://json-server-vercel-liart-iota.vercel.app/services");
  const services = await res.json();
  return {
    props: {
      services,
    },
  };
}
