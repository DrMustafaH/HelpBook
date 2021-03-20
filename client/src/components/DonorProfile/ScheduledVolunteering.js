import React from "react";
import "./ScheduledVolunteering.scss";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
} from "@material-ui/core";

const StyledPaper = withStyles({
  root: {
    height: 350,
    width: "100%",
    color: "#0E212F",
    fontFamily: "'Trirong', serif",
    fontWeight: "700",
    fontSize: "2rem",
    paddingTop: "20px",
    maxHeight: 500,
    overflow: "auto",
  },
})(Paper);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    fontSize: "1rem",
    padding: "15px 20px 0 20px",
  },
  event: {
    marginLeft: "20px",
  },
}));

// ScheduledVolunteering component
export default function ScheduledVolunteering() {
  const classes = useStyles();

  return (
    <div className="scheduled-volunteering-section">
      <StyledPaper>
        Upcoming Volunteering
        <List component="nav" className={classes.root}>
          <div className="event-date">
            <h2>10/02</h2>
            <ListItem button className={classes.event}>
              <ListItemText primary="Event" />
            </ListItem>
          </div>
          <Divider />

          <div className="event-date">
            <h2>20/07</h2>
            <ListItem button className={classes.event}>
              <ListItemText primary="Event" />
            </ListItem>
          </div>
          <Divider />

          <div className="event-date">
            <h2>01/09</h2>
            <ListItem button className={classes.event}>
              <ListItemText primary="Event" />
            </ListItem>
          </div>
        </List>
      </StyledPaper>
    </div>
  );
}
