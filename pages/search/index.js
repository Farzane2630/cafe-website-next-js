import Header from "@/Components/modules/Header";
import React from "react";
import SearchResult from "@/Components/templates/SearchResult";

export default function Search(props) {
  return (
    <>
      <Header prevPage="home" currentPage="search" />
      <SearchResult searchResult={props.searchResult} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch("https://luck-clever-sunshine.glitch.me/menu");
  const data = await res.json();
  const searchResult = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );
  return {
    props: {
      searchResult,
    },
  };
}
