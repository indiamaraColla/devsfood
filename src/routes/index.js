import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import ProfileUpdate from '../pages/Profile/ProfileUpdate';
import ProfileUpdatePassword from '../pages/Profile/ProfileUpdatePassword';
import Orders from '../pages/Orders';
import PrivateRoute from '../components/PrivateRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/orders" component={Orders} />
        <PrivateRoute exact path="/my-account" component={Profile} />
        <PrivateRoute exact path="/my-account/update-profile" component={ProfileUpdate} />
        <PrivateRoute exact path="/my-account/update-password" component={ProfileUpdatePassword} />
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
