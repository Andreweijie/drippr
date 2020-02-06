import React, { Component } from "react";

export default class Drip extends Component {
  render() {
    let { message } = this.props.drip;
    return (
      <div>
        <span>{message}</span>
      </div>
    );
  }
}
