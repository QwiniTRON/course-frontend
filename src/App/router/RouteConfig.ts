export const routeConfig = {
  App: { path: "/", exact: true, key: "AppRoute" },
  Login: { path: "/login", exact: true, key: "LoginRoute" },
  SignUp: { path: "/signup", exact: true, key: "SignUpRoute" },
  Profile: { path: "/profile", exact: true, key: "ProfileRoute" },
  Lessons: { path: "/lessons", exact: true, key: "LessonsRoute" },
  Settings: { path: "/settings", exact: true, key: "SettingsRoute" },
  Practices: { path: "/admin/practices", exact: true, key: "PracticesRoute" },
  AdminMain: { path: "/admin", exact: true, key: "AdminRoute" },
  LessonPage: { path: "/lessons/:id", exact: true, key: "LessonPageRoute" },
  AdminLesson: { path: "/admin/lessons/:id/view", exact: true, key: "AdminLessonRoute" },
  AdminLessons: { path: "/admin/lessons", exact: true, key: "AdminLessonsRoute" },
  AdminPractice: { path: "/admin/practice/:id", exact: true, key: "AdminPracticeRoute" },
  AdminLessonEdit: { path: "/admin/lessons/:id/edit", exact: true, key: "AdminLessonEditRoute" },
  AdminLessonCreate: { path: "/admin/lessons/create", exact: true, key: "AdminLessonCreateRoute" },
}

export const appRoutes = {
  App: routeConfig.App.path,
  Login: routeConfig.Login.path,
  SignUp: routeConfig.SignUp.path,
  Profile: routeConfig.Profile.path,
  Lessons: routeConfig.Lessons.path,
  Settings: routeConfig.Settings.path,
  Practices: routeConfig.Practices.path,
  AdminMain: routeConfig.AdminMain.path,
  LessonPage: routeConfig.LessonPage.path,
  AdminLesson: routeConfig.AdminLesson.path,
  AdminLessons: routeConfig.AdminLessons.path,
  AdminPractice: routeConfig.AdminPractice.path,
  AdminLessonEdit: routeConfig.AdminLessonEdit.path,
  AdminLessonCreate: routeConfig.AdminLessonCreate.path,

  getLessonView(id: string) {
    return `/admin/lessons/${id}/view`;
  },
  getLessonEdit(id: string) {
    return `/admin/lessons/${id}/edit`;
  },
  getLessonPage(id: string) {
    return `/lessons/${id}`;
  },
  getAdminPractice(id: string) {
    return `/admin/practice/${id}`;
  }
}