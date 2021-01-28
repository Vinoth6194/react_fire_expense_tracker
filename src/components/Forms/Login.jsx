import React, { Component } from "react";
import "./Login.css";
import fire from "../../config/Fire";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    fileErrors: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {})
      .catch((error) => {
        this.setState({ fileErrors: error.message });
      });
  };
  render() {
    let errorNotification = this.state.fileErrors ? (
      <div className="error">{this.state.fileErrors}</div>
    ) : null;
    return (
      <>
        {errorNotification}
        <form>
          <input
            type="text"
            className="regField"
            placeholder="Your Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            className="regField"
            placeholder="Your Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            className="submitBtn"
            value="ENTER"
            onClick={this.login}
          />
        </form>
      </>
    );
  }
}
