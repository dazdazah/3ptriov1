import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardTravelIcon from "@material-ui/icons/CardTravel";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 360
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        title="Looking to go Krabi for a week, maybe WA.. "
        subheader="Dec 18, 2019"
      />
      <CardMedia
        className={classes.media}
        image="https://homeiswhereyourbagis.com/wp-content/uploads/2019/03/artikelbild-chicken-island-tub-island-krabi.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          I’ll be in Krabi Next weekend solo! I’ve got an Airbnb in the town and
          am planning to do Island Tour, and other typical beach and food stuff.
          Experienced solo traveler that stumbled across this and figured I’d
          see if anyone might be in the area to go see the caves or eat many
          many Pad Thai.
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
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        ></IconButton>
      </CardActions>
    </Card>
  );
}
