import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link
          to="/places"
          className="logo"
          style={{ backgroundImage: "url('./images/logo-3triptrio.png')" }}
        ></Link>
        <div className="profile">
          <Link to="/profile" className="button">
            <div
              className="avatar"
              style={{ backgroundImage: `url(${this.props.avatar})` }}
            ></div>
            <span>{this.props.name}</span>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
