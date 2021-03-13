import React from "react";
import "./ScheduledVolunteering.scss";

import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScheduledVolunteering() {
  const classes = useStyles();

  return (
    <div className="scheduled-volunteering-section">
      <h1>Upcoming Volunteering</h1>
      <List component="nav" className={classes.root}>
        <div className="event-date">
          <h2>DATE</h2>
          <ListItem button>
            <ListItemText primary="Event" className={classes.event} />
          </ListItem>
        </div>
        <Divider />

        <div className="event-date">
          <h2>DATE</h2>
          <ListItem button>
            <ListItemText primary="Event" />
          </ListItem>
        </div>
        <Divider />

        <div className="event-date">
          <h2>DATE</h2>
          <ListItem button>
            <ListItemText primary="Event" />
          </ListItem>
        </div>
      </List>
    </div>
  );
}
