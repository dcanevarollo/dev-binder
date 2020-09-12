import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/app/Home';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default AppRoutes;
