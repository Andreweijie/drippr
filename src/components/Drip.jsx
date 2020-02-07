import React, { Component } from "react";

export default class Drip extends Component {
  render() {
    let { message, username } = this.props.drip;
    return (
      <div className="drip">
        <span>{username}</span>
        <h1>{message}</h1>
      </div>
    );
  }
}
