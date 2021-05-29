import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { MainPage } from '../../containers/pages/MainPage';
import { LoginPage } from '../../containers/pages/LoginPage/LoginPage';
import { SignUpPage } from '../../containers/pages/SignUpPage';
import { ByAuth, ByRole } from './politics';
import { routeConfig } from './RouteConfig';
import { Secure, SecureProps } from './Secure';
import { AdminLessons, AdminMain, AdminViewLesson, LessonCreate, LessonWork, ProfilePage, SettingsPage } from '../../containers';
import { UserRoles } from '../../models';

type AppRoutesProps = {}

export const AppRoutes: React.FC<AppRoutesProps> = (props) => {
  return (
    <Switch key="MainSwitch">

      {/* Main */}
      <Route {...routeConfig.App} key="some">
        <Secure politic={ByAuth()} key="AppSecure" redirectPath={routeConfig.Login.path}>
          <MainPage key="page" />
        </Secure>
      </Route>

      {/* Login */}
      <Route {...routeConfig.Login}>
        <Secure key="LoginSecure" politic={ByAuth(false)} redirectPath={routeConfig.App.path}>
          <LoginPage key="page" />
        </Secure>
      </Route>

      {/* sign up */}
      <Route {...routeConfig.SignUp}>
        <AppSecure key="SignUpSecure" politic={ByAuth(false)}>
          <SignUpPage key="page" />
        </AppSecure>
      </Route>

      {/* profile */}
      <Route {...routeConfig.Profile}>
        <AppSecure key="ProfileSecure" politic={ByAuth()}>
          <ProfilePage key="page" />
        </AppSecure>
      </Route>

      {/* settings */}
      <Route {...routeConfig.Settings}>
        <AppSecure key="SettingsSecure" politic={ByAuth()}>
          <SettingsPage key="page" />
        </AppSecure>
      </Route>

      {/* admin main */}
      <Route {...routeConfig.AdminMain}>
        <AppSecure key="AdminMainSecure" politic={ByRole([UserRoles.Admin, UserRoles.Teacher])}>
          <AdminMain key="page" />
        </AppSecure>
      </Route>

      {/* admin lessons */}
      <Route {...routeConfig.AdminLessons}>
        <AppSecure key="AdminLessonsSecure" politic={ByRole([UserRoles.Admin, UserRoles.Teacher])}>
          <AdminLessons key="page" />
        </AppSecure>
      </Route>

      {/* admin lesson view */}
      <Route {...routeConfig.AdminLesson}>
        <AppSecure key="AdminLessonsViewSecure" politic={ByRole([UserRoles.Admin, UserRoles.Teacher])}>
          <AdminViewLesson key="page" />
        </AppSecure>
      </Route>

      {/* admin lesson edit */}
      <Route {...routeConfig.AdminLessonEdit}>
        <AppSecure key="AdminLessonEditSecure" politic={ByRole([UserRoles.Admin, UserRoles.Teacher])}>
          <LessonWork key="page" />
        </AppSecure>
      </Route>

      {/* admin lesson create */}
      <Route {...routeConfig.AdminLessonCreate}>
        <AppSecure key="AdminLessonCreateSecure" politic={ByRole([UserRoles.Admin, UserRoles.Teacher])}>
          <LessonCreate />
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