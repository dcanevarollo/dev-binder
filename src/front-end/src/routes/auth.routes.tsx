import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/register" component={SignUp} />
  </Switch>
);

export default AppRoutes;
