import React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Container
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = theme => ({
  "@global": {
    body: {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(3),
    borderRadius: 10,
    textAlign: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  sendInputToState = (e, input) => {
    let state = this.state;
    state[input] = e.target.value;
    this.setState({ state });
  };

  login = e => {
    e.preventDefault();
    console.log(this.props.history);
    if (this.state.email && this.state.password) {
      console.log("about to log in");
      axios
        .post(`${process.env.REACT_APP_API}/login`, this.state)
        .then(res => {
          console.log({ res });
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            this.props.history.push("/");
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form
            className={classes.form}
            noValidate
            style={{ backgroundColor: "rgba(255, 255, 255, 0.90)" }}
            onSubmit={this.login}
          >
            <img
              src="https://github.com/dazdazah/3ptriov1/blob/master/img/logo-login.png?raw=true"
              alt="logo"
              width="150"
              padding="30"
              className={classes.logo}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              value={this.state.email}
              onChange={e => this.sendInputToState(e, "email")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              type="password"
              value={this.state.password}
              onChange={e => this.sendInputToState(e, "password")}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ background: "#E83350" }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUpInSide" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(Login);
