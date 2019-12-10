import React from "react";
import {
  withStyles,
  Drawer,
  CssBaseline,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Typography,
  Grid
} from "@material-ui/core";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LandscapeIcon from "@material-ui/icons/Landscape";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AddIcon from "@material-ui/icons/Add";

import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import NativeSelect from "@material-ui/core/NativeSelect";

const drawerWidth = 260;

const useStyles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },

  formControl: {
    minWidth: 250
  },
  focused: {},
  disabled: {},
  error: {},
  underlineInput: {
    "&:before": {
      // normal
      borderBottom: ".5px solid #ffffff"
    },
    "&:after": {
      // focused
      borderBottom: `.5px solid #ffffff`
    },
    "&:hover:not($disabled):not($focused):not($error):before": {
      // hover
      borderBottom: `.5px solid #ffffff`
    }
  },

  toolbar: theme.mixins.toolbar
});

class SideBar extends React.Component {
  state = {
    location: "",
    budget: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <Link href="/CreatePostTrip" style={{ textDecoration: "none" }}>
            <List style={{ marginTop: "5px", marginBottom: "5px" }}>
              {["Post a Trip"].map(text => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Link>

          <Divider />

          <Grid container spacing={0} alignItems="center" justify="center">
            <Grid item xs={6}></Grid>
          </Grid>

          <List style={{ marginTop: "20px", marginBottom: "20px" }}>
            <ListItem>
              <NativeSelect
                value={this.state.location}
                onChange={this.handleChange("location")}
                input={
                  <Input
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                    classes={{
                      focused: classes.focused,
                      disabled: classes.disabled,
                      error: classes.error,
                      underline: classes.underlineInput
                    }}
                  />
                }
                inputProps={{
                  name: "location",
                  id: "location-simple"
                }}
              >
                <option value="" disabled>
                  Location
                </option>

                <option value={10}>Koh Tao</option>
                <option value={20}>Koh Pangan</option>
                <option value={30}>Koh Samui</option>
                <option value={40}>Koh Phi Phi</option>
                <option value={50}>Phuket</option>
                <option value={60}>Bangkok</option>
                <option value={70}>Changmai</option>
              </NativeSelect>
            </ListItem>
          </List>

          <Divider />

          <List style={{ marginTop: "20px", marginBottom: "20px" }}>
            <ListItem>
              <NativeSelect
                value={this.state.location}
                onChange={this.handleChange("location")}
                input={
                  <Input
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                    classes={{
                      focused: classes.focused,
                      disabled: classes.disabled,
                      error: classes.error,
                      underline: classes.underlineInput
                    }}
                  />
                }
                inputProps={{
                  name: "location",
                  id: "location-simple"
                }}
              >
                <option value="" disabled>
                  Budget
                </option>

                <option value={10}>1500-2000</option>
                <option value={20}>2000-3500</option>
                <option value={30}>3500-4500</option>
                <option value={40}>4500-5500</option>
                <option value={50}>5500-6500</option>
              </NativeSelect>
            </ListItem>
          </List>
          <Divider />
          <List style={{ marginTop: "20px", marginBottom: "20px" }}>
            <ListItem>
              <NativeSelect
                value={this.state.location}
                onChange={this.handleChange("location")}
                input={
                  <Input
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                    classes={{
                      focused: classes.focused,
                      disabled: classes.disabled,
                      error: classes.error,
                      underline: classes.underlineInput
                    }}
                  />
                }
                inputProps={{
                  name: "location",
                  id: "location-simple"
                }}
              >
                <option value="" disabled>
                  Recent Post
                </option>

                <option value={10}>1500-2000</option>
                <option value={20}>2000-3500</option>
                <option value={30}>3500-4500</option>
                <option value={40}>4500-5500</option>
                <option value={50}>5500-6500</option>
              </NativeSelect>
            </ListItem>
          </List>
          <Divider />
          <List style={{ marginTop: "20px", marginBottom: "20px" }}>
            <ListItem>
              <NativeSelect
                value={this.state.location}
                onChange={this.handleChange("location")}
                input={
                  <Input
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                    classes={{
                      focused: classes.focused,
                      disabled: classes.disabled,
                      error: classes.error,
                      underline: classes.underlineInput
                    }}
                  />
                }
                inputProps={{
                  name: "location",
                  id: "location-simple"
                }}
              >
                <option value="" disabled>
                  Suggested Post
                </option>

                <option value={10}>1500-2000</option>
                <option value={20}>2000-3500</option>
                <option value={30}>3500-4500</option>
                <option value={40}>4500-5500</option>
                <option value={50}>5500-6500</option>
              </NativeSelect>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

export default withStyles(useStyles)(SideBar);
