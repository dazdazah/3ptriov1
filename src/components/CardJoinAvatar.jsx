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
  IconButton,
  CardHeader
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

class CardJoinAvatar extends React.Component {
  state = {
    // users: this.props.user,
    trip: this.props.user
  };
  componentWillMount() {
    console.log("this.props.trip", this.props.trip);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Grid>
          <CardHeader
            avatar={
              <Avatar
                alt="Remy Sharp"
                src={this.state.trip.users.avatar}
                className={classes.bigAvatar}
              />
            }
            classes={{
              title: classes.title
            }}
            action={<IconButton aria-label="settings"></IconButton>}
            title={this.state.trip.title}
            subheader={this.state.trip.dates}
          />
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

export default withStyles(useStyles)(CardJoinAvatar);
