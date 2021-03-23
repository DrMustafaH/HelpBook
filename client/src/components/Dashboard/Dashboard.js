import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "./Categories";
import Helps from "./Helps";
import NewsLog from "./NewsLog";
import Search from "./Search";

// Dashboard component
export default function Dashboard(props) {
  // States used in the Dashboard component
  const [selected, setSelected] = useState({ id: 1 });
  const [helpList, setHelpList] = useState([]);

  // a useEffect that activates on every click made on a category the selected state will change and the useeffect will be evoked
  useEffect(() => {
    // an if statment to show the categories in first page render
    if (!selected) return;
    // async function with axios GET call to get all the users who requested help in that specfic category using by category id
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
        selected={selected}
        setCategory={(category) => setSelected(category)}
      />
      <Helps list={helpList} />
      <NewsLog />
    </div>
  );
}
