import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, AppBar, Typography, Container } from "@material-ui/core";
import CardAvatar from "./CardAvatar.jsx";
import Nav from "./Nav.jsx";
import Cards from "./Cards.jsx";
import SideBar from "./SideBar.jsx";

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

class Trips extends React.Component {
  state = {
    trips: [],
    users: []
  };

  componentWillMount() {
    console.log("this.props.history in Trips", this.props.history);
    axios
      .get(`${process.env.REACT_APP_API}/trips`, {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(res => {
        console.log("trips >>>>>", res.data);
        this.setState({ trips: res.data });
      })
      .catch(err => console.log({ err }));

    axios

      .get(`${process.env.REACT_APP_API}/users`)
      .then(response => {
        console.log({ users: response.data });
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
            <h3>Trips Posted</h3>
          </Typography>

          <div className={classes.toolbar}>
            <Box display="flex" m={2}>
              {this.state.trips.map(trip => (
                <Cards trip={trip} key={trip._id} />
              ))}
            </Box>
          </div>

          <Typography>
            <h3>Travelers who needs travel buddies</h3>
          </Typography>
          <Box display="flex" m={2}>
            {this.state.users.map(user => (
              <CardAvatar user={user} key={user._id} />
            ))}
          </Box>
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(Trips);
