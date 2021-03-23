import React from "react";
import "./Categories.scss";

// Categories Component
export default function Categories(props) {
  // function to handle the click of a category in the dashboard to be selected
  function handleClick(category) {
    props.setCategory(category);
  }

  // map function to render each category from the category table
  const categories = props.categories.map((category, i) => {
    return (
      <div
        className="category-container"
        key={i}
        category_id={category.id}
        onClick={() => handleClick(category)}
      >
        <img src={category.image} className="category-img"></img>
        <div className="category-name">{category.name}</div>
      </div>
    );
  });

  return <div className="categories-section">{categories}</div>;
}
