import React, { useState } from "react";
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
        className={`category-container ${
          props.selected.id === category.id ? "selected" : ""
        }`}
        key={i}
        category_id={category.id}
        onClick={() => handleClick(category)}
      >
        <img
          alt="categories"
          src={category.image}
          className="category-img"
        ></img>
        {category.name == "Immigration & Refugees" && (
          <div className="category-name2">{category.name}</div>
        )}
        {category.name !== "Immigration & Refugees" && (
          <div className="category-name">{category.name}</div>
        )}
      </div>
    );
  });

  return <div className="categories-section">{categories}</div>;
}
