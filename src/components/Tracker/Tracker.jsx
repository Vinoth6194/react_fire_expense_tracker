import React, { Component } from "react";
import fire from "../../config/Fire";
import "./Tracker.css";
export default class Tracker extends Component {
  state = {
    transactions: [],
    money: 0,

    transactionName: "",
    transactionType: "",
    price: "",
    currentUID: fire.auth().currentUser.uid,
  };

  handleChange = (input) => (e) => {
    this.setState({
      // [e.target.name]: e.target.value !== "0" ? e.target.value : "",
      [input]: e.target.value !== "0" ? e.target.value : "",
    });
  };

  logout = () => {
    fire.auth().signOut();
  };

  addNewTransaction = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const {
      transactionName,
      transactionType,
      price,
      currentUID,
      money,
    } = this.state;

    if (transactionName && transactionType && price) {
      const BackUpState = this.state.transactions;
      BackUpState.push({
        id: BackUpState.length + 1,
        name: transactionName,
        type: transactionType,
        price: price,
        user_id: currentUID,
      });
      console.log(BackUpState);
      fire
        .database()
        .ref("Transactions/" + currentUID)
        .push({
          id: BackUpState.length + 1,
          name: transactionName,
          type: transactionType,
          price: price,
          user_id: currentUID,
        })
        .then((data) => {
          console.log("success callback");
          this.setState({
            transactions: BackUpState,
            money:
              transactionType === "deposit"
                ? money + parseFloat(price)
                : money - parseFloat(price),
            transactionName: "",
            transactionType: "",
            price: "",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  render() {
    const currentUser = fire.auth().currentUser;
    return (
      <>
        <div className="trackerBlock">
          <div className="welcome">
            <span>Hi, {currentUser.displayName}!</span>
            <button className="exit" onClick={this.logout}>
              Exit
            </button>
          </div>
          <div className="totalMoney">$145</div>
          <div className="newTransactionBlock">
            <div className="newTransaction">
              <form>
                <input
                  type="text"
                  placeholder="Transaction Name"
                  name="transactionName"
                  value={this.state.transactionName}
                  onChange={this.handleChange("transactionName")}
                />
                <div className="inputGroup">
                  <select
                    name="type"
                    value={this.state.transactionType}
                    onChange={this.handleChange("transactionType")}
                  >
                    <option value="0">Type</option>
                    <option value="expense">Expense</option>
                    <option value="deposit">Deposit</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange("price")}
                  />
                </div>
                <button
                  className="addTransaction"
                  onClick={this.addNewTransaction}
                >
                  + Add Transaction
                </button>
              </form>
            </div>
          </div>
          <div className="latestTransactions">
            <p>Latest Transactions</p>
            <ul>
              <li>
                <div>ATM Deposit</div>
                <div>+$5</div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
