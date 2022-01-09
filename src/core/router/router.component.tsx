import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  ProductsListScene
} from 'scenes/productsList';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.productsList]}
          component={ProductsListScene}
        />
      </Switch>
    </Router>
  );
};
