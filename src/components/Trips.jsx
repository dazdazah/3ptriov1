import React from "react";
import { withStyles } from "@material-ui/core/styles";
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
import CardAvatar from "./CardAvatar.jsx";
import Nav from "./Nav.jsx";
import Cards from "./Cards.jsx";
import SideBar from "./SideBar.jsx";
import Trip from "./Trip.jsx";
import axios from "axios";

const useStyles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
});

const classes = withStyles();

class Trips extends React.Component {
  state = {
    trips: [],
    users: []
  };

  componentWillMount() {
    axios
      .get(`http://localhost:4000/trips`)
      .then(res => {
        console.log({ trips: res.data });
        this.setState({ trips: res.data });
      })
      .catch(err => console.log({ err }));

    axios
      .get(`http://localhost:4000/users`)
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log({ error });
      });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Nav />
        </AppBar>
        <SideBar />
        // content cards
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography>
            <h3>Join other trips</h3>
          </Typography>
          <Box>
            <Box display="flex" m={2}>
              {this.state.trips.map(trip => (
                <Cards trip={trip} key={trip._id} />
              ))}
            </Box>
          </Box>
          <Typography>
            <h3>People who are interested to join you</h3>
          </Typography>
          <Box>
            <Box display="flex" m={2}>
              {this.state.users.map(user => (
                <CardAvatar user={user} key={user._id} />
              ))}
            </Box>
          </Box>
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(Trips);
