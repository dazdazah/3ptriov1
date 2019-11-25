import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    location: "",
    avatar: ""
  };

  changevalueName = e => {
    this.setState({ name: e.target.value });
  };

  changevalueEmail = e => {
    this.setState({ email: e.target.value });
  };

  changevaluePassword = e => {
    this.setState({ password: e.target.value });
  };

  changevalueLocation = e => {
    this.setState({ location: e.target.value });
  };

  signup = e => {
    e.preventDefault();
    console.log("about to signup");
    let data = new FormData();

    for (let key in this.state) {
      data.append(key, this.state[key]);
    }
    if (this.state.password) {
      axios
        .post(`${process.env.REACT_APP_API}/signup`, data)
        .then(res => {
          if (res.data) {
            console.log("yay");
            localStorage.setItem("token", res.data);
            this.props.history.push("/");
          } else {
            console.log("nay");
          }
        })
        .catch(err => console.log({ err }));
    } else {
      alert("Yo! you need password");
    }
  };

  addFile = e => {
    let user = this.state;
    user.file = e.target.files[0];
    this.setState({ user });
  };

  render() {
    return (
      <div className="grid center middle tall image">
        <div className="card small">
          <div className="content">
            <div
              className="logo"
              style={{ backgroundImage: 'url("images/logo-airbnb.png")' }}
            />
            <form onSubmit={e => this.signup(e)}>
              <div className="group">
                <label>Name</label>

                <input
                  type="text"
                  value={this.state.name}
                  onChange={e => this.changevalueName(e)}
                />
              </div>
              <div className="group">
                <label>Email</label>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={e => this.changevalueEmail(e)}
                />
              </div>
              <div className="group">
                <label>Password</label>
                <input
                  type="password"
                  onChange={e => this.changevaluePassword(e)}
                />
              </div>
              <div className="group">
                <label>Location</label>
                <input
                  type="text"
                  onChange={e => this.changevalueLocation(e)}
                />
              </div>
              <div className="group">
                <label>Profile Picture</label>
                <input type="file" onChange={e => this.addFile(e)} />
              </div>
              <button className="primary">Signup</button>
            </form>
            <p className="footer">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
