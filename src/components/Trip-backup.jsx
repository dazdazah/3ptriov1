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
  Link
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
    trip: [],
    users: []
  };
  componentWillMount() {
    console.log(
      "route",
      `${process.env.REACT_APP_API}/trip/${this.props.match.params.id}`
    );
    axios
      .get(`${process.env.REACT_APP_API}/trip/${this.props.match.params.id}`)
      .then(res => {
        console.log({ trip: res.data });
        this.setState({ trip: res.data });
      })
      .catch(err => console.log({ err }));
  }
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
                <Typography>
                  <h1>{this.state.trip.title}</h1>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography>{this.state.trip.description}</Typography>
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
              </CardContent>

              <CardContent>
                <Typography style={{ color: "#E83350" }}>
                  <h2>Travelers who are interested</h2>
                </Typography>
                <Box display="flex" m={2}>
                  {this.state.users.map(user => (
                    <CardAvatar user={user} key={user._id} />
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
