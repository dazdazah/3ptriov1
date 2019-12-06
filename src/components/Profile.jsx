import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Box,
  Typography,
  CardContent,
  Avatar,
  Button,
  AppBar
} from "@material-ui/core";
import axios from "axios";
import Nav from "./Nav.jsx";
import SideBar from "./SideBar.jsx";

const useStyles = theme => ({
  root: {
    padding: theme.spacing(2, 3),
    display: "flex"
  },
  avatar: {
    margin: theme.spacing(2, 1),
    maxWidth: 350
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: theme.mixins.toolbar
});

class Profile extends React.Component {
  state = {
    user: []
  };
  componentWillMount() {
    console.log(
      "route",
      `${process.env.REACT_APP_API}/user/${this.props.match.params.id}`
    );
    axios
      .get(`${process.env.REACT_APP_API}/user/${this.props.match.params.id}`)
      .then(res => {
        console.log({ user: res.data });
        this.setState({ user: res.data });
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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Paper className={classes.root}>
            <Grid>
              <main className={classes.content}>
                <Box display="flex">
                  <Avatar
                    alt="profile"
                    src={this.state.user.avatar}
                    style={{ height: 200, width: 200, marginWidth: 50 }}
                  ></Avatar>

                  <Box ml={2}>
                    <Typography>{this.state.user.firstName}</Typography>
                  </Box>
                </Box>
              </main>
              <main className={classes.content}>
                <CardContent>
                  <Typography>{this.state.user.description}</Typography>
                </CardContent>
              </main>
              <main className={classes.content}>
                <Button
                  size="big"
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{ background: "#E83350" }}
                >
                  Connect
                </Button>
              </main>
            </Grid>
          </Paper>
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(Profile);
