import React, { Component } from "react";
import "./Login.css";
export default class Login extends Component {
  state = {
    email: "",
    password: "",
    fileErrors: "",
  };
  render() {
    return (
      <>
        <form>
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
