import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import firebase, { auth, provider } from "./components/firebase/firebase";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      user: null, // <-- add this line
    };
    this.login = this.login.bind(this); // <-- add this line
    this.logout = this.logout.bind(this); // <-- add this line
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
    this.logout();
  }
  handleChange(e) {
    /* ... */
  }
  logout() {
    // we will add the code for this in a moment, but need to add the method now or the bind will throw an error
    auth.signOut().then(() => {
      this.setState({
        user: null,
      });
    });
  }
  login() {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        user,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute
          path="/dashboard"
          user={this.state.user}
          component={Dashboard}
        />
      </div>
    );
  }
}

export default App;
