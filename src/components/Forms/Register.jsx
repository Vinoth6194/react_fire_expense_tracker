import React, { Component } from "react";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    displayName: "",
    fileErrors: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <>
        <form>
          <input
            type="text"
            className="regField"
            placeholder="Your Name"
            name="displayName"
            value={this.state.displayName}
            onChange={this.handleChange}
          />
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
          <input type="submit" className="submitBtn" value="REGISTER" />
        </form>
      </>
    );
  }
}
