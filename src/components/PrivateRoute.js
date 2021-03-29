import React from 'react';
// import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import StoreContext from './Store/Context';
import { isAuthenticated } from '../services/auth';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { token } = useContext(StoreContext);

//   return <Route {...rest} render={() => (token ? <Component {...rest} /> : <Redirect to="/login" />)} />;
// };
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }
  />
);
export default PrivateRoute;
