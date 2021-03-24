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
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

const StyledPaper = withStyles({
  root: {
    height: 330,
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
    padding: "0 20px",
  },
  eventItem: {
    // marginLeft: "20px",
    "&:hover": {
      backgroundColor: "#f0efec",
      color: "#0E212F",
    },
  },
  event: {
    // marginLeft: "20px",
    padding: "0 20px",
  },
  date: {
    margin: 0,
  },
  divider: {
    color: "#f0efec",
    background: "#f0efec",
  },
}));

// withstyles method to style the DeleteForeverIcon MUI react componect and assign a new name to it (StyledIconDelete)
const StyledIconDelete = withStyles({
  root: {
    paddingLeft: 10,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(DeleteForeverIcon);

// withstyles method to style the Icon MUI react componect and assign a new name to it (StyledIconEdit)
const StyledIconEdit = withStyles({
  root: {
    paddingRigth: 50,
    // paddingBottom: 22,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(EditIcon);

// ScheduledVolunteering component
export default function ScheduledVolunteering() {
  const classes = useStyles();

  return (
    <div className="scheduled-volunteering-section">
      <StyledPaper>
        <h1 className="scheduled-volunteering-header">Upcoming Volunteering</h1>
        <List component="nav" className={classes.root}>
          <div className="event-date">
            <ListItem button className={classes.eventItem}>
              <h2 className={classes.date}>10/06</h2>
              <ListItemText
                className={classes.event}
                primary="Bingo Night with Growing Older"
              />
              <div>
                <StyledIconEdit />
                <StyledIconDelete />
              </div>
            </ListItem>
          </div>
          <Divider className={classes.divider} />

          <div className="event-date">
            <ListItem button className={classes.eventItem}>
              <h2 className={classes.date}>20/07</h2>
              <ListItemText
                className={classes.event}
                primary="Help at a charity auction"
              />
              <div>
                <StyledIconEdit />
                <StyledIconDelete />
              </div>
            </ListItem>
          </div>
          <Divider className={classes.divider} />

          <div className="event-date">
            <ListItem button className={classes.eventItem}>
              <h2 className={classes.date}>01/09</h2>
              <ListItemText
                className={classes.event}
                primary="Walk shelter puppies for a day"
              />
              <div>
                <StyledIconEdit />
                <StyledIconDelete />
              </div>
            </ListItem>
          </div>
          <Divider className={classes.divider} />
          <div className="event-date">
            <ListItem button className={classes.eventItem}>
              <h2 className={classes.date}>12/09</h2>
              <ListItemText
                className={classes.event}
                primary="Deliver meals to patients at local hospital"
              />
              <div>
                <StyledIconEdit />
                <StyledIconDelete />
              </div>
            </ListItem>
          </div>
        </List>
      </StyledPaper>
    </div>
  );
}
