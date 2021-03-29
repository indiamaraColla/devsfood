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
import MenuItem from '../components/MenuItem';
import PrivateRoute from '../components/PrivateRoute';
import Card from '../components/Cart';

import { Container, Menu, PageBody } from '../AppStyled.js/styled';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Container>
        <Menu>
          <MenuItem title="Loja" icon="/assets/store.png" link="/" />
          <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
          <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/my-account" />
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/orders" component={Orders} />
            <PrivateRoute exact path="/my-account" component={Profile} />
            <PrivateRoute exact path="/my-account/update-profile" component={ProfileUpdate} />
            <PrivateRoute exact path="/my-account/update-password" component={ProfileUpdatePassword} />
          </Switch>
        </PageBody>
        <Card />
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  );
};
export default Routes;
