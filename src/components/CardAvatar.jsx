import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Box,
  Typography,
  Avatar,
  Button,
  IconButton
} from "@material-ui/core";

const useStyles = theme => ({
  root: {
    padding: theme.spacing(2, 3),
    margin: 5
  },
  avatar: {
    margin: theme.spacing(1)
  }
});

class CardAvatar extends React.Component {
  state = {
    users: this.props.user
  };

  componentWillMount() {
    console.log("this.state.users", this.state.users);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper
        className={classes.root}
        style={{
          height: 250,
          width: 200,
          marginWidth: 30
        }}
      >
        <Box alignItems="center" alignItems="center" justifyContent="center">
          <Avatar
            alt="profile"
            src={this.state.users.avatar}
            style={{
              height: 80,
              width: 80,
              marginLeft: 30
            }}
          ></Avatar>
          <Box component="span" m={0.2}>
            <Typography
              style={{
                textAlign: "center",
                fontWeight: "600"
              }}
            >
              {this.state.users.firstName}
            </Typography>
          </Box>
        </Box>
        <Typography
          style={{
            textAlign: "center",
            lineHeight: -1,
            fontWeight: "400",
            marginBottom: 18
          }}
        >
          wants to join you
        </Typography>
        <Link
          className="card link"
          to={`/user/${this.state.users._id}`}
          style={{ textDecoration: "none" }}
        >
          <Box
            component="span"
            alignItems="center"
            justifyContent="center"
            style={{
              width: 80,
              marginLeft: 25,
              marginBottom: 10
            }}
          >
            <Button
              size="small"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ background: "#E83350" }}
            >
              See Profile
            </Button>
          </Box>
        </Link>
      </Paper>
    );
  }
}

export default withStyles(useStyles)(CardAvatar);
