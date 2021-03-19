import React from "react";
import "./Categories.scss";
import { Paper, withStyles } from "@material-ui/core";

const StyledPaper = withStyles({
  root: {
    background: "#0E212F",
    height: 100,
    width: 200,
    margin: "30px 10px 10px 10px",
    color: "#f0efec",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Hind Madurai', sans-serif",
    fontWeight: "700",
    fontSize: "1.5rem",
    borderRadius: 10,
    "&:hover": {
      background: "#3891A6",
      transition: "background 0.5s ease-in-out",
      cursor: "pointer",
    },
  },
})(Paper);

export default function Categories(props) {
  function handleClick(category) {
    props.setCategory(category);
  }

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

  return <div className="categories-section">{categories}</div>;
}
