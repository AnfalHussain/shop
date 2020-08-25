import React, { Component } from "react";
import { Switch, Route, Router, Redirect, withRouter } from "react-router-dom";

//Style
import "./App.css";

//Components
import List from "./components/ProductsList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App-header">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/successful" component={Success} />
        <Route path="/profile" component={Profile} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route exact path="/" component={List} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
