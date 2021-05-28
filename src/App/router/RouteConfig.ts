export const routeConfig = {
  App: { path: "/", exact: true, key: "AppRoute" },
  Login: { path: "/login", exact: true, key: "LoginRoute" },
  SignUp: { path: "/signup", exact: true, key: "SignUpRoute" },
  Profile: { path: "/profile", exact: true, key: "ProfileRoute" },
  Settings: { path: "/settings", exact: true, key: "SettingsRoute" },
  AdminMain: { path: "/admin", exact: true, key: "AdminRoute" },
  AdminLessons: { path: "/admin/lessons", exact: true, key: "AdminLessonsRoute" },
}

export const appRoutes = {
  App: routeConfig.App.path,
  Login: routeConfig.Login.path,
  SignUp: routeConfig.SignUp.path,
  Profile: routeConfig.Profile.path,
  Settings: routeConfig.Settings.path,
  AdminMain: routeConfig.AdminMain.path,
  AdminLessons: routeConfig.AdminLessons.path,
}