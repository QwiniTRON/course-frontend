import { UserAuthView, UserRoles } from '../../models';


export function ByRole(roles: UserRoles[]) {
  return (user: UserAuthView) => {
    if (Boolean(user.user) === false) return false;

    return roles.filter(role => user.user?.Roles.includes(role)).length === roles.length;
  }
}

export function ByAuth(isAuth: boolean = true) {
  return (user: UserAuthView) => {
    if (isAuth == false) return Boolean(user.authentication) == false && Boolean(user.user) == false;

    return Boolean(user.user || user.authentication) === true;
  }
}