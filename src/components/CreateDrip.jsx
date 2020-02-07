import React, { Component } from "react";
import fire from "./firebase/firebase";
let db = fire.firestore();

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
      user: this.props.user.uid,
      username: this.props.user.displayName,
      createdAt: new Date(),
      isAReply: false
    };

    db.collection("drips").add(newDrip);
    this.setState({
      message: ""
    });
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
