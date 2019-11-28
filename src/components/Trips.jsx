import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import {
  Drawer,
  Box,
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  List
} from "@material-ui/core";
import Avatar from "./Avatar.jsx";
import Nav from "./Nav.jsx";
import Cards from "./Cards.jsx";
import SideBar from "./SideBar.jsx";
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
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Nav />
      </AppBar>

      <SideBar />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography>
          <h3>Join other trips</h3>
        </Typography>

        <Box display="flex">
          <Box m={1}>
            <Cards />
          </Box>
          <Box m={1}>
            <Cards />
          </Box>
        </Box>
      </main>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h3>People who are interested to join you</h3>
        <List>
          <Avatar />
        </List>
        <List>
          <Avatar />
        </List>
      </main>
    </div>
  );
}
