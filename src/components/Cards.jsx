import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
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
import axios from "axios";

const useStyles = theme => ({
  title: {
    color: "gray",
    letterSpacing: -1,
    fontSize: 20,
    fontWeight: "bold"
  },

  card: {
    maxWidth: 400,
    margin: 5
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

class Cards extends React.Component {
  state = {
    trip: this.props.trip,
    users: ""
  };

  componentWillMount() {
    console.log("nav mounted");
    let token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_API}/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })
      .then(response => {
        this.setState({ users: response.data });
        console.log({ response });
      })
      .catch(error => {
        console.log({ error });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src={this.state.trip.leader.avatar}
              className={classes.bigAvatar}
            />
          }
          classes={{
            title: classes.title
          }}
          action={<IconButton aria-label="settings"></IconButton>}
          title={this.state.trip.title}
          subheader={this.state.trip.date}
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

          <Link className="card link" to={`/trip/${this.state.trip._id}`}>
            <IconButton>
              <CardTravelIcon />
              <Typography>Trip Details</Typography>
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(useStyles)(Cards);
