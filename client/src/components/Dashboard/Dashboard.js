import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Helps from "./Helps";
import NewsLog from "./NewsLog";
import Search from "./Search";

export default function Dashboard(props) {
  const [selected, setSelected] = useState();
  const [helpList, setHelpList] = useState([]);

  useEffect(() => {
    if (!selected) return;
    async function getUsersByCategory() {
      const res = await axios.get(`/api/users/category/${selected.id}`);
      setHelpList(res.data);
    }
    getUsersByCategory();
  }, [selected]);

  return (
    <div>
      <Search />
      <Categories
        categories={props.categories}
        setCategory={(category) => setSelected(category)}
      />
      <Helps list={helpList} />
      <NewsLog />
    </div>
  );
}
