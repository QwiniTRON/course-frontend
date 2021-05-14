import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { MainPage } from '../../containers';
import { ByAuth, ByRole } from './politics';
import { routeConfig } from './RouteConfig';
import { Secure } from './Secure';

type AppRoutesProps = {}

export const AppRoutes: React.FC<AppRoutesProps> = (props) => {
  return (
    <Switch key="MainSwitch">
      
      {/* Main */}
      <Route {...routeConfig.App}>
        <Secure politic={ByAuth()} key="AppSecure" redirectPath={routeConfig.Login.path}>
          <MainPage />
        </Secure>
      </Route>

      {/* Login */}
      <Route {...routeConfig.Login}>
        <Secure key="LoginSecure">
          <MainPage />
        </Secure>
      </Route>

      <Redirect to={routeConfig.App.path} />
    </Switch>
  );
};

// * -> /(check auth) ?-> /login