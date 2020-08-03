import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "../pages/Products";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Routes(props) {
  return (
    <Router>
      <Header />
      {props.children}
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/:id">
          <Products />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
