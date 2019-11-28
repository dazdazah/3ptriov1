import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  TextField,
  Box,
  Typography,
  Avatar,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  List
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CakeIcon from "@material-ui/icons/Cake";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3)
  },
  avatar: {
    margin: theme.spacing(2, 1),
    maxWidth: 350
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  toolbar: theme.mixins.toolbar
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid>
        <main className={classes.content}>
          <Box display="flex">
            <Avatar
              alt="profile"
              src="https://randomuser.me/api/portraits/women/8.jpg"
              style={{ height: 200, width: 200, marginWidth: 50 }}
            ></Avatar>
            <Box ml={2}>
              <Typography ml={2}>
                <h1>Carol Lin</h1>
                <ListItemIcon>
                  <LocationOnIcon />
                  Singapore
                </ListItemIcon>
                <List>
                  <ListItemIcon>
                    <CakeIcon />
                    30 years old
                  </ListItemIcon>
                </List>
              </Typography>
            </Box>
          </Box>
        </main>
        <main className={classes.content}>
          <Typography>
            Carol is a passionate instructor who believes yoga and breath can
            change someone's life. She credits her first yoga class as one of
            the best things that ever happened to her. Yoga has given her the
            tools to get out of her head and thrive in the present moment. In
            2012 she decided to take her 200 hour YTT so she could not only
            deepen her practice but share it with others. Her classes have a
            theme of connecting breath and movement, presence and the unfolding
            of possibilities in every moment. Having deep rooted values in the
            importance of community, Ayla is so excited to create this magical
            experience of bringing people together. I am a Yoga Alliace
            Experienced Registered Yoga Teacher with more than 1,000 teaching
            hours and over 300 credit hours of education. I teach yoga full time
            and as a continuing education provider. I've been on several yoga
            retreats all over the world and I'm looking forward to leading my
            own!
          </Typography>
        </main>
        <main className={classes.content}>
          <Button
            size="big"
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ background: "#E83350" }}
          >
            Connect
          </Button>
        </main>
      </Grid>
    </Paper>
  );
}
