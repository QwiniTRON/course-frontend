import { UserAction } from "../types";
import { any, some } from '../consts';

// async
export function Any(an: string) {
  return async function (dispatch: Function, getState: Function) {
    dispatch(Some(an));
  }
}

// static
export function Some(sm: string): UserAction {
  return {
    type: some,
    some: sm
  }
}

// login
// logout