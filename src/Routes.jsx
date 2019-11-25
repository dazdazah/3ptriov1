import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import SignInSide from "./components/SignInSide.jsx";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";

class Routes extends React.Component {
  render() {
    return (
      <>
        <SignInSide />
      </>
    );
  }
}

export default Routes;
