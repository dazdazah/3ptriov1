import React from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardTravelIcon from "@material-ui/icons/CardTravel";

const useStyles = theme => ({
  card: {
    maxWidth: 300,
    margin: 5
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

const classes = withStyles();

class Cards extends React.Component {
  state = {
    trip: this.props.trip
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src="https://avatars2.githubusercontent.com/u/11773475?s=460&v=4"
              className={classes.bigAvatar}
            />
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title={this.state.trip.title}
          subheader="Dec 18, 2019"
        />

        <CardMedia className={classes.media} image={this.state.trip.picture} />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.state.trip.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            <Typography>Interested</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <CardTravelIcon />
            <Typography>Trip Details</Typography>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(useStyles)(Cards);
