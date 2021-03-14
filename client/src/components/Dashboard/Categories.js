import React from "react";
import "./Categories.scss";
import { Paper, withStyles } from "@material-ui/core";

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

export default function Categories(props) {
  function handleClick(event, id) {
    event.preventDefault();
    console.log(id);
  }

  const categories = props.categories.map((category, i) => {
    if (i < 4) {
      return (
        <StyledPaper
          key={i}
          category_id={category.id}
          onClick={(e) => handleClick(e, category.id)}
        >
          {category.name}
        </StyledPaper>
      );
    }
  });
  const categories2 = props.categories.map((category, i) => {
    if (i > 3 && i < 8) {
      return (
        <StyledPaper
          key={i}
          category_id={category.id}
          onClick={(e) => handleClick(e, category.id)}
        >
          {category.name}
        </StyledPaper>
      );
    }
  });
  return (
    <div className="categories-section">
      <div className="first-four">{categories}</div>
      <div className="second-four">{categories2}</div>
    </div>
  );
}
