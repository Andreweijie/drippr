import React, { Component } from "react";
import Drip from "./Drip";
import db from "./firebase/firebase";
import CreateDrip from "./CreateDrip";

export default class Dashboard extends Component {
  state = {
    drips: []
  };
  componentDidMount() {
    db.collection("drips")
      .orderBy("createdAt", "desc")
      .onSnapshot(querySnapshot => {
        let data = [];
        querySnapshot.forEach(doc => {
          let info = doc.data();
          data.push({ ...info, id: doc.id });
        });
        this.setState({
          drips: data
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <CreateDrip></CreateDrip>
        {this.state.drips.map(drip => {
          return <Drip drip={drip}></Drip>;
        })}
      </div>
    );
  }
}
