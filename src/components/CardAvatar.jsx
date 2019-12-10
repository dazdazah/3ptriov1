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
    margin: theme.spacing(2, 1),
    maxWidth: 350
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
      <Paper className={classes.root}>
        <Grid>
          <Avatar
            alt="profile"
            src={this.state.users.avatar}
            style={{ height: 80, width: 80, marginWidth: 50 }}
          ></Avatar>
          <Box component="span" m={0.2}>
            <Typography>
              {this.state.users.firstName} wants to join you
            </Typography>
          </Box>

          <Link className="card link" to={`/user/${this.state.users._id}`}>
            <Box component="span" mt={5}>
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
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(useStyles)(CardAvatar);
