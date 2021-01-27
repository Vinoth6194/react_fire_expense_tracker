import React, { Component } from "react";
import fire from "../../config/Fire";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    displayName: "",
    fireErrors: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  register = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        //          var currentUser = fire.auth().currentUser:
        var currentUser = fire.auth().currentUser;
        currentUser.updateProfile({
          displayName: this.state.displayName,
        });
      })
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  render() {
    let errorNotification = this.state.fireErrors ? (
      <div className="error">{this.state.fireErrors}</div>
    ) : null;
    // let errorNotification = this.state.fireErrors ? (
    //   <div className="Error"> {this.state.fireErrors} </div>
    // ) : null;

    return (
      <div>
        {errorNotification}
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
          <input
            type="submit"
            className="submitBtn"
            value="REGISTER"
            onClick={this.register}
          />
        </form>
      </div>
    );
  }
}
