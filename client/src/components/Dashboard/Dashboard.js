import React from "react";
import Categories from "./Categories";
import Helps from "./Helps";
import NewsLog from "./NewsLog";
import Search from "./Search";

export default function HomePage() {
  return (
    <div>
      <Search />
      <Categories />
      <Helps />
      <NewsLog />
    </div>
  );
}
