import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  TextField,
  Box,
  Typography,
  Avatar,
  Button
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

const classes = withStyles();

class CardAvatar extends React.Component {
  state = {
    users: this.props.user
  };

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
          <Box component="span" mt={5}>
            <Button
              size="small"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ background: "#E83350" }}
            >
              Connect
            </Button>
          </Box>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(useStyles)(CardAvatar);
