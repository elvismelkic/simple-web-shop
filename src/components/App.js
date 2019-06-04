import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main";
import Basket from "./Basket";
import Checkout from "./Checkout";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Route path="/" exact component={Main} />
        <Route path="/basket" component={Basket} />
        <Route path="/checkout" component={Checkout} />
        <Footer />
      </div>
    </Router>
  );
}
