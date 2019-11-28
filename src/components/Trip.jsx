import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  AppBar,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from "@material-ui/core";
import Nav from "./Nav.jsx";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Nav />
      </AppBar>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <img
          src="https://www.traveller.com.au/content/dam/images/1/0/g/g/1/c/image.related.articleLeadwide.620x349.10gduw.png/1415744015369.jpg"
          width="600"
        />
      </main>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography>
          <h1> Flying Solo</h1>
          I’ll be in Krabi Next weekend solo! I’ve got an Airbnb in the town and
          am planning to do Island Tour, and other typical beach and food stuff.
          Experienced solo traveler that stumbled across this and figured I’d
          see if anyone might be in the area to go see the caves or eat many
          many Pad Thai.
        </Typography>
        <div className={classes.toolbar} />
        <Button
          size="large"
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          style={{ background: "#E83350" }}
        >
          I want to join
        </Button>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
