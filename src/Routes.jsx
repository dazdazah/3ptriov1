import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn.jsx";
import SignUpInSide from "./components/SignUpInSide.jsx";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";

class Routes extends React.Component {
  render() {
    return (
      <>
        <LogIn />
      </>
    );
  }
}

export default Routes;
