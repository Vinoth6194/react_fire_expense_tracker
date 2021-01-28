import React, { Component } from "react";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import fire from "../config/Fire";
import Tracker from "./Tracker/Tracker";
import Spinner from "../assets/loader.gif";
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
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    const form = !this.state.formSwitcher ? <Login /> : <Register />;
    if (this.state.user === 1) {
      return (
        <div className="mainBlock">
          <div className="Spinner">
            <img src={Spinner} alt="spinner" className="imgSpinner"></img>
          </div>
        </div>
      );
    }

    return (
      <>
        {!this.state.user ? (
          <div className="mainBlock">
            {form}
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
        ) : (
          <Tracker />
        )}
      </>
    );
  }
}
