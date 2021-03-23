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
    color: "#f0efec",
    background: "#0E212F",
    fontFamily: "adobe-caslon-pro, serif",
    paddingTop: "20px",
    maxHeight: 500,
    overflow: "auto",
  },
})(Paper);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px 20px 0 20px",
  },
  event: {
    marginLeft: "20px",
  },
  divider: {
    color: "#f0efec",
    background: "#f0efec",
  },
}));

// ScheduledVolunteering component
export default function ScheduledVolunteering() {
  const classes = useStyles();

  return (
    <div className="scheduled-volunteering-section">
      <StyledPaper>
        <div className="following-header">
          <h1>Upcoming Volunteering</h1>
          {/* <img className="arrow-icon-header" src="../images/arrow.png"></img> */}
        </div>
        <List component="nav" className={classes.root}>
          <div className="event-date">
            <h2>10/02</h2>
            <ListItem button className={classes.event}>
              <ListItemText primary="Event" />
            </ListItem>
          </div>
          <Divider className={classes.divider} />

          <div className="event-date">
            <h2>20/07</h2>
            <ListItem button className={classes.event}>
              <ListItemText primary="Event" />
            </ListItem>
          </div>
          <Divider className={classes.divider} />

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
