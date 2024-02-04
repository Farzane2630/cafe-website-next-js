import Header from "@/Components/modules/Header";
import ProductsDetails from "@/Components/modules/Products/ProductDetails";
import Testimonial from "@/Components/templates/Index/Testimonial";
import React from "react";

export default function Product({ product, productComments }) {
  console.log(productComments);
  return (
    <>
      <Header currentPage={product.title} prevPage="menu" />
      <ProductsDetails data={product} />

      {productComments ? (
        // productComments.slice(0,6).map(comment=>(
        //   <div className="container">
        <Testimonial comments={productComments} />
      ) : (
        // </div>
        // ))
        ""
      )}
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/menu`);
  const data = await res.json();

  const paths = data.map((product) => ({
    params: {
      id: String(product.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:4000/menu/${params.id}`);
  const product = await res.json();

  const Comments = await fetch(`http://localhost:4000/comments`);
  const AllComments = await Comments.json();

  const productComments = AllComments.filter(
    (data) => data.productID === +params.id
  );

  return {
    props: {
      product,
      productComments,
    },
    revalidate: 60 * 60 * 12,
  };
}
