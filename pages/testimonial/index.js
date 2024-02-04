import Header from "@/Components/modules/Header";
import TestimonialComponent from "@/Components/templates/Index/Testimonial";
import React from "react";

export default function Testimonial({ comments }) {
  return (
    <>
      <Header prevPage="Home" currentPage="Testimonial" />

      <TestimonialComponent comments={comments} />
    </>
  );
}


// ISR
export async function getStaticProps() {
  const data = await fetch("http://localhost:4000/comments");
  const comments = await data.json();
  return {
    props: {
      comments,
    },
    revalidate: 60 * 60 * 12,
  };
}
