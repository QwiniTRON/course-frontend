import { generatePath } from "react-router-dom";

export const routeConfig = {
  App: { path: "/", exact: true, key: "AppRoute" },
  Login: { path: "/login", exact: true, key: "LoginRoute" },
  About: { path: "/about", exact: true, key: "AboutRoute" },
  SignUp: { path: "/signup", exact: true, key: "SignUpRoute" },
  Profile: { path: "/profile", exact: true, key: "ProfileRoute" },
  Lessons: { path: "/lessons", exact: true, key: "LessonsRoute" },
  Settings: { path: "/settings", exact: true, key: "SettingsRoute" },
  Practices: { path: "/admin/practices", exact: true, key: "PracticesRoute" },
  AdminMain: { path: "/admin", exact: true, key: "AdminRoute" },
  AdminUser: { path: "/admin/users/:id", exact: true, key: "AdminUserRoute" },
  LessonPage: { path: "/lessons/:id", exact: true, key: "LessonPageRoute" },
  AdminUsers: { path: "/admin/users", exact: true, key: "AdminUsersRoute" },
  AdminLesson: { path: "/admin/lessons/:id/view", exact: true, key: "AdminLessonRoute" },
  AdminLessons: { path: "/admin/lessons", exact: true, key: "AdminLessonsRoute" },
  AdminPractice: { path: "/admin/practice/:id", exact: true, key: "AdminPracticeRoute" },
  AdminLessonEdit: { path: "/admin/lessons/:id/edit", exact: true, key: "AdminLessonEditRoute" },
  AdminInstruction: { path: "/admin/instruction", exact: true, key: "AdminInstractionRoute" },
  AdminLessonCreate: { path: "/admin/lessons/create", exact: true, key: "AdminLessonCreateRoute" },
}

export const appRoutes = {
  App: routeConfig.App.path,
  Login: routeConfig.Login.path,
  About: routeConfig.About.path,
  SignUp: routeConfig.SignUp.path,
  Profile: routeConfig.Profile.path,
  Lessons: routeConfig.Lessons.path,
  Settings: routeConfig.Settings.path,
  Practices: routeConfig.Practices.path,
  AdminMain: routeConfig.AdminMain.path,
  AdminUser: routeConfig.AdminUser.path,
  LessonPage: routeConfig.LessonPage.path,
  AdminUsers: routeConfig.AdminUsers.path,
  AdminLesson: routeConfig.AdminLesson.path,
  AdminLessons: routeConfig.AdminLessons.path,
  AdminPractice: routeConfig.AdminPractice.path,
  AdminLessonEdit: routeConfig.AdminLessonEdit.path,
  AdminInstruction: routeConfig.AdminInstruction.path,
  AdminLessonCreate: routeConfig.AdminLessonCreate.path,

  getLessonView(id: string) {
    // return generatePath("/user/:id/:entity(posts|comments)", {
    //   id: 1,
    // });
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
  },
  getAdminUser(id: string) {
    return `/admin/users/${id}`;
  }
}