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
  logout = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <>
        <div className="trackerBlock">
          <div className="welcome">
            <span>Hi, Username!</span>
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
                />
                <div className="inputGroup">
                  <select name="type">
                    <option value="0">Type</option>
                    <option value="expense">Expense</option>
                    <option value="deposit">Deposit</option>
                  </select>
                  <input type="text" placeholder="Price" name="price" />
                </div>
                <button className="addTransaction">+ Add Transaction</button>
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
