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
    this.setState({
      formSwitcher: action === "register" ? true : false,
    });
    console.log(action);
  };
  render() {
    return (
      <>
        <div className="mainBlock">
          <Login />
          {!this.state.formSwitcher ? (
            <span className="underLine">
              Not Registered?{" "}
              <button
                onClick={() =>
                  this.formSwitcher(
                    !this.state.formSwitcher ? "register" : "login"
                  )
                }
                className="linkBtn"
              >
                Create an Account
              </button>
            </span>
          ) : (
            <span className="underLine">
              Have an Account?{" "}
              <button
                onClick={() =>
                  this.formSwitcher(
                    !this.state.formSwitcher ? "register" : "login"
                  )
                }
                className="linkBtn"
              >
                Sign In here
              </button>
            </span>
          )}

          {/* <Register /> */}
        </div>
      </>
    );
  }
}
