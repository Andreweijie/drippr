import React, { Component } from "react";
import db from "./firebase/firebase";

export default class CreateDrip extends Component {
  state = {
    message: ""
  };
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newDrip = {
      message: this.state.message,
      createdAt: new Date()
    };

    db.collection("drips").add(newDrip);
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.message}
            id="message"
            onChange={this.onChange}
          ></input>
          <button onClick={this.onSubmit}>create</button>
        </form>
      </div>
    );
  }
}
