import React from "react";
import "./Helps.scss";
import { List, makeStyles, Paper, withStyles } from "@material-ui/core";
import HelpItem from "./HelpItem";
import { useHistory } from "react-router-dom";

const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 500,
    width: "45%",
    margin: "50px 10px 10px 10px",
    color: "#0E212F",
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Trirong', serif",
    fontWeight: "700",
    fontSize: "2.5rem",
    borderRadius: 0,
    maxHeight: 500,
    overflow: "auto",
  },
})(Paper);

const useStyles = makeStyles((props) => ({
  root: {
    width: "auto",
    backgroundColor: "#f0efec",
    borderRadius: 22,
    position: "center",
    padding: 0,
    marginLeft: 10,
  },
}));

export default function Helps(props) {
  const classes = useStyles();
  const history = useHistory();

  function handleClick() {
    history.push("/receiver");
  }

  const users_organizations = props.list.map((user, i) => {
    if (user.type_id === 2) {
      return (
        <HelpItem
          key={i}
          avatar={user.avatar}
          username={user.username}
          category_id={user.category_id}
          type_id={user.type_id}
          onClick={handleClick}
        />
      );
    }
  });
  const users_individuals = props.list.map((user, i) => {
    if (user.type_id === 3) {
      return (
        <HelpItem
          key={i}
          avatar={user.avatar}
          username={user.username}
          category_id={user.category_id}
          type_id={user.type_id}
          // onClick={handleClick}
        />
      );
    }
  });
  return (
    <div className="helps-section">
      <StyledPaper>
        <div>
          Organizations
          <List className={classes.root}>{users_organizations}</List>
        </div>
      </StyledPaper>
      <StyledPaper>
        <div>
          Individuals
          <List className={classes.root}>{users_individuals}</List>
        </div>
      </StyledPaper>
    </div>
  );
}
