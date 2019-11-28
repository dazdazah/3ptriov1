import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Grid,
  Button,
  TextField
} from "@material-ui/core";
import Nav from "./Nav.jsx";
import Cards from "./Cards.jsx";
import SideBar from "./SideBar.jsx";

const useStyles = makeStyles(theme => ({
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
}));

export default function ClippedDrawer() {
  const classes = useStyles();

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
      </main>
    </div>
  );
}
