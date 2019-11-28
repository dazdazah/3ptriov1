import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn.jsx";
import SignUpInSide from "./components/SignUpInSide.jsx";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import Trip from "./components/Trip.jsx";
import Avatar from "./components/Avatar.jsx";
import Profile from "./components/Profile.jsx";
import Trips from "./components/Trips.jsx";
import CreatePostTrip from "./components/CreatePostTrip.jsx";

class Routes extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/SignUpInSide/" component={SignUpInSide} />
            <Route path="/CreatePostTrip/" component={CreatePostTrip} />
            <Route path="/Avatar/" component={Avatar} />
            <Route path="/Profile/" component={Profile} />
            <Route path="/Trip" component={Trip} />
            <Route path="/LogIn" component={LogIn} />
            <Route path="/Trips" component={Trips} />
            <Route path="/" component={SignUpInSide} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Routes;
