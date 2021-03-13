import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles(() => ({
  root: {
    width: "95%",
    maxWidth: "36ch",
    backgroundColor: "#f0efec",
    borderRadius: 22,
    position: "center",
    padding: 0,
    marginLeft: 10,
    "&:hover": {
      backgroundColor: "#dbd6c5",
      cursor: "pointer",
    },
  },
  inline: {
    display: "inline",
  },
}));

const StyledIconAdd = withStyles({
  root: {
    marginTop: 20,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(PersonAddIcon);

export default function HelpItem() {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="org-avatar"
            src="https://robohash.org/autminimadolor.bmp?size=50x50&set=set1"
          />
        </ListItemAvatar>
        <ListItemText
          primary="World Health Organization"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Vaccine Day
              </Typography>
              {" Need volunteers to help out in vaccine delivery…"}
            </React.Fragment>
          }
        />
        <StyledIconAdd />
      </ListItem>
    </List>
  );
}
