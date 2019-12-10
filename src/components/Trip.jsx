import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Button,
  AppBar,
  CardContent,
  Typography,
  CardMedia,
  Avatar,
  Box,
  Link,
  CardHeader
} from "@material-ui/core";
import axios from "axios";
import Nav from "./Nav.jsx";
import SideBar from "./SideBar.jsx";
import CardAvatar from "./CardAvatar.jsx";

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

class Trip extends React.Component {
  state = {
    trip: {
      users: [],
      leader: ""
    }
  };
  componentWillMount() {
    console.log(
      "route",
      `${process.env.REACT_APP_API}/trip/${this.props.match.params.id}`
    );
    axios
      .get(`${process.env.REACT_APP_API}/trip/${this.props.match.params.id}`)
      .then(res => {
        console.log("trip >>>", res.data);
        this.setState({ trip: res.data });
      })
      .catch(err => console.log({ err }));

    // User who posted
    axios
      .get(`${process.env.REACT_APP_API}/users`)
      .then(response => {
        console.log({ users: response.data });
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log({ error });
      });
    console.log("this.state", this.state);
  }
  // User who joined
  changeOnJoin = e => {
    e.preventDefault();
    axios
      .patch(
        `${process.env.REACT_APP_API}/trip/${this.props.match.params.id}`,
        {},
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      )
      .then(res => {
        console.log("res => ", res.data);
        this.setState({ trip: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    console.log("this.state", this.state);
  };

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
                src={this.state.trip.picture}
                style={{ width: 800, marginWidth: 50 }}
              />
            </main>

            <main className={classes.content}>
              <CardContent>
                <h1>{this.state.trip.title}</h1>
                <Typography>{this.state.trip.description}</Typography>
                <div className={classes.toolbar} />
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{ background: "#E83350" }}
                  onClick={e => this.changeOnJoin(e)}
                >
                  I want a join
                </Button>
              </CardContent>

              <CardContent>
                <Typography style={{ color: "#E83350", letterSpacing: "1" }}>
                  <h2>Travellers who are joining</h2>
                </Typography>
                <Box display="flex">
                  {this.state.trip.users.map(user => (
                    <Paper
                      style={{
                        height: 200,
                        width: 150,
                        margin: 10,
                        padding: 10
                      }}
                    >
                      <Grid>
                        <Avatar
                          display="flex"
                          alt="profile"
                          src={user.avatar}
                          style={{ height: 80, width: 80 }}
                        ></Avatar>
                        <Typography>
                          <h3>{user.firstName}</h3>is joining this trip
                        </Typography>
                      </Grid>
                    </Paper>
                  ))}
                </Box>
              </CardContent>
            </main>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles)(Trip);
