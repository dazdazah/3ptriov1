import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignInSide from "./components/SignInSide.jsx";
import SignUp from "./components/SignUp.jsx";
import Nav from "./components/Nav.jsx";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <SignInSide />
      </>
    );
  }
}

export default Routes;
