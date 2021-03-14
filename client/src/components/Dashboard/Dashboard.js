import { CircularProgress } from "@material-ui/core";
import React from "react";
import Categories from "./Categories";
import Helps from "./Helps";
import NewsLog from "./NewsLog";
import Search from "./Search";

export default function HomePage(props) {
  // let arr = props.users;
  // console.log("ARRR", arr.users[0].avatar);
  console.log("DASH PROPS", props.users[0].avatar);
  return (
    <div>
      <Search />
      <Categories
        categories={props.categories}
        // onclick={}
        setCategory={(category) => console.log(category)}
      />
      <Helps users={props.users} categories={props.categories} />
      <NewsLog />
    </div>
  );
}
