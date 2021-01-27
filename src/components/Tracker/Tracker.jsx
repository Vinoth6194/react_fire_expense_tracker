import React, { Component } from "react";
import fire from "../../config/Fire";

export default class Tracker extends Component {
  logout = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <div>
        Youare logged in
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
