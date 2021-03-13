import React from "react";
import "./ActivityFeed.scss";

import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  withStyles,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 400,
    width: "100%",
    color: "#0E212F",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Trirong', serif",
    borderRadius: 0,
    maxHeight: 500,
    overflow: "auto",
  },
})(Paper);

const useStyles = makeStyles((theme) => ({
  root: {
    height: 5,
  },
}));

const StyledIconArrow = withStyles({
  root: {
    color: "#0E212F",
    fontSize: "30px",
  },
})(ArrowRightIcon);

export default function FollowingSection() {
  const classes = useStyles();
  return (
    <div className="activity-feed-section">
      <StyledPaper>
        <h1 className="activity-feed-header">Activity Feed</h1>
        <Grid>
          <div className={classes.demo}>
            <List>
              <ListItem className={classes.root}>
                <ListItemIcon>
                  <StyledIconArrow />
                </ListItemIcon>
                <ListItemText primary="Activity 1" />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <StyledIconArrow />
                </ListItemIcon>
                <ListItemText primary="Activity 2" />
              </ListItem>
            </List>
          </div>
        </Grid>
      </StyledPaper>
    </div>
  );
}
