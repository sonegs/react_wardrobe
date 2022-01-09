import React from "react";
import {HashRouter as Router, Switch, Route } from "react-router-dom"
import { RouterComponent } from 'core/router';
import { ProductsListContextComponent } from 'pods/productsList/products-list.context';

export const App = () => {
  return (
  <Router>
    <Switch>
    <ProductsListContextComponent>
      <Route exact path="/">
        <RouterComponent />
      </Route>
    </ProductsListContextComponent>
    </Switch>
  </Router>
  );
};
