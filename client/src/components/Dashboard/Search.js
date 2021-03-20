import React from "react";
import { IconButton, InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.scss";

// Search component
export default function Search() {
  const fieldStyle = { width: "70%" };
  return (
    <div className="search-section">
      <Paper style={fieldStyle} component="form">
        <IconButton aria-label="menu"></IconButton>
        <InputBase
          placeholder="Search HelpBook"
          inputProps={{ "aria-label": "search helpbook" }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
