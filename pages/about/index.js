import AboutComponnet from "@/Components/templates/Index/About";
import Header from "@/Components/modules/Header";
import React from "react";

export default function About() {
  return (
    <>
      <Header prevPage="Home" currentPage="About" />
     <AboutComponnet />
    </>
  );
}


export async function getStaticProps() {
  console.log("SSG Page");
  return {
    props: {},
  };
}

