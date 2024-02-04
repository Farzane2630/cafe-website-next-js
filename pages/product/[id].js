import Header from "@/Components/modules/Header";
import ProductsDetails from "@/Components/modules/Products/ProductDetails";
import React from "react";

export default function Product({ product }) {
  return (
    <>
      <Header currentPage={product.title} prevPage="menu" />
      <ProductsDetails data={product} />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/menu`);
  const data = await res.json();

  const paths = data.map((product) => ({
    params: {
      id: String(product.id)
    }
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

  return {
    props: {
      product,
    },
  };
}
