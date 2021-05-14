import React from 'react';
import { User, UserAuthView } from '../../models';


export function ByRole(roles: string[]) {
  return (user: UserAuthView) => {
    if(Boolean(user.user) === false) return false;
    
    return roles.filter(role => user.user?.Roles.includes(role)).length === roles.length;
  }
}

export function ByAuth(isAuth: boolean = true) {
  return (user: UserAuthView) => {
    return Boolean(user.user || user.authentication) === isAuth;
  }
}