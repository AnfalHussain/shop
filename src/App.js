import React, { Component } from "react";
import { Switch, Route, Router, Redirect, withRouter } from "react-router-dom";

//Style
import "./App.css";

//Components
import List from "./components/ProductsList";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App-header">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/successful" component={Success} />
        <Route exact path="/" component={List} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
