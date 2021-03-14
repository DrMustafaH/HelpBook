import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Helps from "./Helps";
import NewsLog from "./NewsLog";
import Search from "./Search";
const categories = [
  {
    id: 1,
    name: "Health",
  },
  {
    id: 2,
    name: "Food Banks",
  },
  {
    id: 3,
    name: "Immigration & Refugees",
  },
  {
    id: 4,
    name: "Education",
  },
  {
    id: 5,
    name: "Animals",
  },
  {
    id: 6,
    name: "Kids",
  },
  {
    id: 7,
    name: "Women",
  },
  {
    id: 8,
    name: "Others",
  },
];
export default function Dashboard(props) {
  const [selected, setSelected] = useState();
  const [helpList, setHelpList] = useState([]);

  useEffect(() => {
    console.log(selected);
    if (!selected) return;
    async function getHelpList() {
      const res = await axios.get(`/api/users/help/${selected.id}`);
      console.log(res.data);
      setHelpList(res.data);
    }
    getHelpList();
  }, [selected]);

  return (
    <div>
      <Search />
      <Categories
        categories={categories}
        setCategory={(category) => setSelected(category)}
      />
      <Helps list={helpList} />
      {/* <NewsLog /> */}
    </div>
  );
}
