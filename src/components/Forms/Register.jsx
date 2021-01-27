import React, { Component } from "react";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    displayName: "",
    fileErrors: "",
  };
  render() {
    return (
      <>
        <form>
          <input
            type="text"
            className="regField"
            placeholder="Your Name"
            name="name"
          />
          <input
            type="text"
            className="regField"
            placeholder="Your Email"
            name="email"
          />
          <input
            type="password"
            className="regField"
            placeholder="Your Password"
            name="password"
          />
          <input type="submit" className="submitBtn" value="ENTER" />
        </form>
      </>
    );
  }
}
