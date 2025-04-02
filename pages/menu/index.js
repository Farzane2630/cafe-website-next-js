import Header from "@/Components/modules/Header";
import MenuComponent from "@/Components/templates/Index/Menu";
import React from "react";

export default function Menu({ menu }) {
  return (
    <>
      <Header prevPage="Home" currentPage="Menu" />
      <MenuComponent products={menu} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://luck-clever-sunshine.glitch.me/menu");
  const menu = await res.json();
  return {
    props: {
      menu,
    },
  };
}
