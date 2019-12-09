import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Link
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  search: {
    position: "relative",

    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

class Nav extends React.Component {
  // state = {
  //   users: this.props.user
  // };

  state = {
    users: ""
  };
  componentWillMount() {
    console.log("nav mounted");
    let token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_API}/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })
      .then(response => {
        this.setState({ users: response.data });
        console.log({ response });
      })
      .catch(error => {
        console.log({ error });
      });
  }

  logOut = e => {
    console.log(this.props);
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ background: "#E83350" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link href="/trips">
                <img
                  src="https://github.com/dazdazah/3ptriov1/blob/master/img/nav-logo.png?raw=true"
                  alt="logo"
                  width="100"
                  className={classes.logo}
                />
              </Link>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Avatar alt="profile" src={this.state.users.avatar}></Avatar>

            <Button color="inherit" onClick={e => this.logOut(e)}>
              Sign out
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(Nav);
