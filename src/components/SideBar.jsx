import React from "react";
import {
  withStyles,
  Drawer,
  CssBaseline,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link
} from "@material-ui/core";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LandscapeIcon from "@material-ui/icons/Landscape";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AddIcon from "@material-ui/icons/Add";

const drawerWidth = 260;

const useStyles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
});

class SideBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <Link href="/CreatePostTrip">
            <List>
              {["Post a Trip"].map(text => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Link>

          <Divider />
          <List>
            {["Location"].map(text => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Budget (low to high)"].map(text => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />

          <List>
            {["Duration"].map(text => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <HourglassEmptyIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />

          <List>
            {["Type"].map(text => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <LandscapeIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />

          <Divider />
        </Drawer>
      </div>
    );
  }
}

export default withStyles(useStyles)(SideBar);
