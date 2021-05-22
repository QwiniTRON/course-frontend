import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { MainPage } from '../../containers/pages/MainPage';
import { LoginPage } from '../../containers/pages/LoginPage/LoginPage';
import { SignUpPage } from '../../containers/pages/SignUpPage';
import { ByAuth, ByRole } from './politics';
import { routeConfig } from './RouteConfig';
import { Secure, SecureProps } from './Secure';

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
        <Secure key="LoginSecure" politic={ByAuth(false)} redirectPath={routeConfig.App.path}>
          <LoginPage />
        </Secure>
      </Route>

      {/* sign up */}
      <Route {...routeConfig.SignUp}>
        <AppSecure key="SignUpSecure" politic={ByAuth(false)}>
          <SignUpPage />
        </AppSecure>
      </Route>

      <Redirect to={routeConfig.App.path} />
    </Switch>
  );
};

export const AppSecure: React.FC<SecureProps> = (props) => (
  <Secure {...props} redirectPath={routeConfig.App.path}>
    {props.children}
  </Secure>
);

export const LoginSecure: React.FC<SecureProps> = (props) => (
  <Secure {...props} redirectPath={routeConfig.Login.path}>
    {props.children}
  </Secure>
);

// * -> /(check auth) ?-> /login

// также можно просто скрывать route
// {ByAuth(user) && <Route></Route>}
// switch выбирает первого ребёнка с подходящим параметром path