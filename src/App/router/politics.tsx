import { UserAuthView, UserRoles } from '../../models';


export function ByRole(roles: UserRoles[]) {
  return (user: UserAuthView) => {
    if (Boolean(user.user) === false) return false;
    
    return roles.filter(role => user.user?.roles.includes(role)).length > 0;
  }
}

export function ByAuth(isAuth: boolean = true) {
  return (user: UserAuthView) => {
    if (isAuth == false) return Boolean(user.authentication) == false && Boolean(user.user) == false;

    return Boolean(user.user || user.authentication) === true;
  }
}