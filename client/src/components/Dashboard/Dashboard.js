import React from "react";
import Categories from "./Categories";
import Helps from "./Helps";
import Search from "./Search";

export default function HomePage() {
  return (
    <div>
      <Search />
      <Categories />
      <Helps />
    </div>
  );
}
