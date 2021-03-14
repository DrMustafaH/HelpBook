import React from "react";
import "./Helps.scss";
import { Paper, withStyles } from "@material-ui/core";
import HelpItem from "./HelpItem";

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
// const days = props.days.map((day, i) => {
//   return (
//     <DayListItem
//       key={i}
//       name={day.name}
//       spots={day.spots}
//       selected={day.name === props.day}
//       setDay={(event) => props.setDay(day.name)}
//     />
//   );
// });
// return <ul>{days}</ul>;
export default function Helps(props) {
  const users_organizations = props.users.map((user, i) => {
    if (user.type_id === 2) {
      return (
        <HelpItem
          key={i}
          avatar={user.avatar}
          username={user.username}
          category_id={user.category_id}
          type_id={user.type_id}
        />
      );
    }
  });
  const users_individuals = props.users.map((user, i) => {
    if (user.type_id === 3) {
      return (
        <HelpItem
          key={i}
          avatar={user.avatar}
          username={user.username}
          category_id={user.category_id}
          type_id={user.type_id}
        />
      );
    }
  });
  console.log("HELPS PROPS", props);
  return (
    <div className="helps-section">
      <StyledPaper>
        <div>
          Organizations
          {users_organizations}
        </div>
      </StyledPaper>
      <StyledPaper>
        <div>
          Individuals
          {users_individuals}
        </div>
      </StyledPaper>
    </div>
  );
}
