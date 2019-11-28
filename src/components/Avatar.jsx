import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  TextField,
  Box,
  Typography,
  Avatar,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3)
  },
  avatar: {
    margin: theme.spacing(2, 1),
    maxWidth: 350
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid>
        <Avatar
          alt="Remy Sharp"
          src="https://randomuser.me/api/portraits/women/8.jpg"
          className={classes.bigAvatar}
        ></Avatar>
        <Box component="span" m={0.2}>
          <Typography component="p">
            Carol wants to join you, connect with her
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
