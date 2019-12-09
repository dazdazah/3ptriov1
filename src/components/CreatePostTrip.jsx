import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  CssBaseline,
  Typography,
  Grid,
  Button,
  TextField
} from "@material-ui/core";
import Nav from "./Nav.jsx";
import SideBar from "./SideBar.jsx";
import axios from "axios";

const useStyles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
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

class CreatePostTrip extends React.Component {
  state = {
    trip: {
      title: "",
      description: "",
      file: "",
      date: ""
    }
  };

  changevalueTitle = e => {
    let trip = this.state.trip;
    trip.title = e.target.value;
    this.setState({ trip });
  };
  changevalueDescription = e => {
    let trip = this.state.trip;
    trip.description = e.target.value;
    this.setState({ trip });
  };
  changevaluePicture = e => {
    let trip = this.state.trip;
    trip.file = e.target.files[0];
    this.setState({ trip });
  };

  changevalueDate = e => {
    let trip = this.state.trip;
    trip.date = e.target.value;
    this.setState({ trip });
  };

  postTrip = e => {
    e.preventDefault();
    console.log("about to create a trip");
    let data = new FormData();

    let trip = this.state.trip;

    for (let key in trip) {
      console.log({ key });
      console.log("value", trip[key]);
      data.append(key, trip[key]);
    }

    axios
      .post(`${process.env.REACT_APP_API}/posttrip`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        if (res.data) {
          this.setState({ trip: res.data });
          console.log("res.data", res.data);
          this.props.history.push("/");
        } else {
          console.log("nay");
        }
      })
      .catch(err => console.log({ err }));
  };

  // addFileTrip = e => {
  //   let trip = this.state;
  //   trip.file = e.target.files[0];
  //   this.setState({ trip });
  // };

  render() {
    const { classes } = this.props;
    const values = {
      default: Date.now
    };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Nav />
        </AppBar>
        <SideBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography component="h1" variant="h5" style={{ margin: 8 }}>
            Tell Us About Your Trip
          </Typography>

          <form onSubmit={e => this.postTrip(e)}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-full-width"
                label="Title"
                style={{ margin: 8 }}
                placeholder="Name Your Trip"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                onChange={e => this.changevalueTitle(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-full-width"
                label="Description"
                style={{ margin: 8 }}
                placeholder="Tell us about this trip"
                multiline
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                onChange={e => this.changevalueDescription(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Picture of Your Destination"
                style={{ margin: 8 }}
                placeholder="Upload Picture of Your Destination"
                variant="outlined"
                required
                fullWidth
                name="Upload Picture"
                type="file"
                id="file"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => this.changevaluePicture(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Start Date"
                style={{ margin: 8 }}
                placeholder="Date of Departure"
                variant="outlined"
                required
                fullWidth
                name="Date"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                onChange={e => this.changevalueDate(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6} style={{ margin: 8 }}>
              <Button
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ background: "#E83350" }}
              >
                Post
              </Button>
            </Grid>
          </form>
        </main>
      </div>
    );
  }
}
export default withStyles(useStyles)(CreatePostTrip);
