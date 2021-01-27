import React, { Component } from "react";
import Login from "./Forms/Login";
import Register from "./Forms/Register";

import "./Main.css";

export default class Main extends Component {
  state = {
    user: 1,
    loading: true,
    formSwitcher: false,
  };

  formSwitcher = (action) => {
    console.log(action);
  };
  render() {
    return (
      <>
        <div className="mainBlock">
          <Login />
          <span className="underLine">
            Not Registered?{" "}
            <button
              className="linkBtn"
              onClick={() => this.formSwitcher("register")}
            >
              Create an Account
            </button>
          </span>
          {/* <Register /> */}
        </div>
      </>
    );
  }
}
