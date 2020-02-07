import React, { Component } from "react";
import Drip from "./Drip";
import fire from "./firebase/firebase";
import CreateDrip from "./CreateDrip";

let db = fire.firestore();
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
      <div className="dashboard">
        <h1>Dripboard</h1>
        <CreateDrip user={this.props.user}></CreateDrip>
        {this.state.drips.map(drip => {
          return <Drip drip={drip}></Drip>;
        })}
      </div>
    );
  }
}
