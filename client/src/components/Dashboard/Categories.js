import React from "react";
import { Paper, withStyles } from "@material-ui/core";
import "./Categories.scss";

// withstyles method to style the Paper MUI react componect and assign a new name to it (StyledPaper)
const StyledPaper = withStyles({
  root: {
    background: "#0E212F",
    height: 150,
    width: 250,
    margin: "50px 10px 10px 10px",
    color: "#f0efec",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Hind Madurai', sans-serif",
    fontWeight: "700",
    fontSize: "1.7rem",
    borderRadius: 22,
    "&:hover": {
      background: "#3891A6",
      transition: "background 0.5s ease-in-out",
      cursor: "pointer",
    },
  },
})(Paper);

// Categories Component
export default function Categories(props) {
  // function to handle the click of a category in the dashboard to be selected
  function handleClick(category) {
    props.setCategory(category);
  }

  // map function to render each category from the category table
  const categories = props.categories.map((category, i) => {
    return (
      <StyledPaper
        key={i}
        category_id={category.id}
        onClick={() => handleClick(category)}
      >
        {category.name}
      </StyledPaper>
    );
  });

  return (
    <div className="categories-section">
      <div className="first-four">{categories}</div>
      {/* <div className="second-four">{categories2}</div> */}
    </div>
  );
}
