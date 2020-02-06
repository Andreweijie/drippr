import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App;
