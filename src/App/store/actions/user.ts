import { UserAction } from "../types";
import { UserSetToken, UserSetData, UserSetError, UserSetLoading } from '../consts';
import { User, UserData } from "../../../models";
import { LoginQuery, UserLoginRequest } from "../../../server/Queries/Auth/LoginQuery";
import { RootState } from "../StoreProvider";
import { ApiFetcher, GetCurrentUserQuery, CheckCurrentToken } from "../../../server";


// actions
export function setToken(token: string): UserAction {
  localStorage.setItem(UserData.UserTokenKey, token);

  return {
    type: UserSetToken,
    token: token
  }
}

export function setUser(user: User): UserAction {
  return {
    type: UserSetData,
    user: user
  }
}

export function setError(error: string): UserAction {
  return {
    type: UserSetError,
    error: error
  }
}

export function setLoading(loading: boolean): UserAction {
  return {
    type: UserSetLoading,
    loading: loading
  }
}

// logick
export function Login(loginData: UserLoginRequest) {
  return async function (dispatch: Function, getState: () => RootState) {
    dispatch(setLoading(true));

    const loginFetcher = new ApiFetcher(LoginQuery);

    let loginAnswer;

    try {
      loginAnswer = await loginFetcher.fetch(loginData);
    } catch (err) { }
console.log(loginAnswer);

    if (Boolean(loginAnswer?.succeeded) == false) {
      dispatch(setError(loginAnswer?.errorMessage ?? "что-то пошло не так..."));
      dispatch(setLoading(false));
      return;
    }

    if (loginAnswer) {
      dispatch(setToken(loginAnswer?.data.token));
    }

    let currentUser;
    try {
      currentUser = await GetCurrentUserQuery();
    } catch (err) {
    }

    if(currentUser) {
      dispatch(setUser(currentUser.data.data));
    }

    dispatch(setLoading(false));
  }
}
// logout

export function INIT() {
  return async function (dispatch: Function, getState: () => RootState) {
    let savedToken = localStorage.getItem(UserData.UserTokenKey);

    if (savedToken) {
      let checkAnswer;
      try {
        checkAnswer = await CheckCurrentToken();

        if (checkAnswer.data.succeeded) {
          dispatch(setToken(checkAnswer.data.data.token));
        }
      } catch (err) {
      } finally {
        if (Boolean(checkAnswer?.data.succeeded) == false) localStorage.removeItem(UserData.UserTokenKey);
      }

      if (Boolean(checkAnswer?.data.succeeded) == false) return;

      let currentUser;

      try {
        currentUser = await GetCurrentUserQuery();

        if (currentUser.data.succeeded) dispatch(setUser(currentUser.data.data));
      } catch (err) { } finally { }
    }
  }
}