import React from "react";
import {HashRouter as Router, Switch, Route } from "react-router-dom"
import { RouterComponent } from 'core/router';

export const App = () => {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <RouterComponent />
      </Route>
    </Switch>
  </Router>
  );
};
