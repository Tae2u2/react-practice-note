import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";

const Router = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/mail">
            <Auth />
          </Route>
          <Route path="/map">
            <Koreamap />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/piggy">
            <Piggys />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Router;
