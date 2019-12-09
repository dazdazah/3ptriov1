import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Link,
  Paper,
  Grid,
  Typography
} from "@material-ui/core";
import axios from "axios";

const useStyles = theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://github.com/dazdazah/3ptriov1/blob/master/img/banner-sidesign.png?raw=true)",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class SignUpInSide extends React.Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      description: "",
      avatar: ""
    }
  };

  changevalueFirstName = e => {
    this.setState({ firstName: e.target.value });
  };
  changevalueLastName = e => {
    this.setState({ lastName: e.target.value });
  };
  changevalueEmail = e => {
    this.setState({ email: e.target.value });
  };
  changevaluePassword = e => {
    this.setState({ password: e.target.value });
  };
  changevalueDescription = e => {
    this.setState({ description: e.target.value });
  };
  changevalueAvatar = e => {
    this.setState({ avatar: e.target.value });
  };

  signup = e => {
    e.preventDefault();
    console.log("about to signup");
    let data = new FormData();

    for (let key in this.state) {
      data.append(key, this.state[key]);
    }
    if (this.state.password) {
      axios
        .post(`${process.env.REACT_APP_API}/signup`, data)
        .then(res => {
          if (res.data) {
            console.log("yay");
            localStorage.setItem("token", res.data);
            this.props.history.push("/");
          } else {
            console.log("nay");
          }
        })
        .catch(err => console.log({ err }));
    } else {
      alert("Yo! you need password");
    }
  };

  addFile = e => {
    let user = this.state;
    user.file = e.target.files[0];
    this.setState({ user });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <form
              className={classes.form}
              noValidate
              onSubmit={e => this.signup(e)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={e => this.changevalueFirstName(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={e => this.changevalueLastName(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={e => this.changevalueEmail(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={e => this.changevaluePassword(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    multiline
                    name="password"
                    label="Brief Description about yourself"
                    type="text"
                    id="text"
                    autoComplete="current-password"
                    onChange={e => this.changevalueDescription(e)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="Upload Picture"
                    type="file"
                    id="file"
                    onChange={e => this.addFile(e)}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ background: "#E83350" }}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(SignUpInSide);
