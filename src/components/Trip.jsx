import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Box,
  Typography,
  Avatar,
  Button,
  Drawer,
  AppBar,
  Toolbar
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import Nav from "./Nav.jsx";
import SideBar from "./SideBar.jsx";
import axios from "axios";

const drawerWidth = 240;
const useStyles = theme => ({
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
});

const classes = withStyles();

class Trip extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Nav />
        </AppBar>
        <SideBar />
        <Paper className={classes.root}>
          <Grid>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <img
                src="https://www.traveller.com.au/content/dam/images/1/0/g/g/1/c/image.related.articleLeadwide.620x349.10gduw.png/1415744015369.jpg"
                width="600"
              />
            </main>
            <main className={classes.content}>
              <Typography>
                <h1> Flying Solo</h1>
                I’ll be in Krabi Next weekend solo! I’ve got an Airbnb in the
                town and am planning to do Island Tour, and other typical beach
                and food stuff. Experienced solo traveler that stumbled across
                this and figured I’d see if anyone might be in the area to go
                see the caves or eat many many Pad Thai. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nam semper quis turpis sit
                amet interdum. Vivamus sit amet ex ac urna lacinia luctus.
                Integer tempor arcu vel interdum ultricies. Phasellus ornare
                lacus at tellus consectetur, sed laoreet nibh dignissim.
                Maecenas vitae neque dignissim, sagittis neque vel, varius
                risus. Duis luctus justo elit, nec sollicitudin odio luctus eu.
                Mauris bibendum mi in faucibus viverra. Sed ut nulla vitae odio
                luctus egestas. Integer convallis risus sit amet magna porttitor
                sagittis. Morbi quis posuere arcu. Donec egestas nisi magna, et
                iaculis justo porta eget. Nam aliquet lectus nunc, quis
                consectetur sem bibendum cursus.
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
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles)(Trip);
