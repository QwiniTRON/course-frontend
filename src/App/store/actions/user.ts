import { UserAction } from "../types";
import { UserSetToken, UserSetData, UserSetError, UserSetLoading, UserClearStore } from '../consts';
import { User, UserData } from "../../../models";
import { LoginQuery, UserLoginRequest } from "../../../server/Queries/Auth/LoginQuery";
import { RootState } from "../StoreProvider";
import {
  ApiFetcher,
  GetCurrentUserQuery,
  CheckCurrentToken,
  SignUpRequest,
  SignUpQuery,
  ChangeUserNick,
  ChangeUserAvatar,
  AddUserProgress,
  AddUserProgressRequest,
  AddPracticeOrder,
  AddPracticeOrderRequest,
  GetUserPractices
} from "../../../server";


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

export function clearUserStore() {
  localStorage.removeItem(UserData.UserTokenKey);

  return {
    type: UserClearStore
  };
}

// logick

/**add user practice order */
export function AddUserPracticeOrder(request: AddPracticeOrderRequest) {
  return async function (dispatch: Function, getState: () => RootState) {
    dispatch(setLoading(true));

    const state = getState();
    const user = state.user.userData!;

    let addAnswer;
    try{
      addAnswer = await AddPracticeOrder(request);
    } catch(err) {}
    if(Boolean(addAnswer?.data?.succeeded) == false) {
      dispatch(setError(addAnswer?.data?.errorMessage ?? "Что-то пошло не так..."));
      return dispatch(setLoading(false));
    }

    let userPractices;
    try {
      userPractices = await GetUserPractices();
    } catch(err) {}
    if(userPractices?.data?.succeeded == true) {
      user.practiceOrders = userPractices.data.data;
      dispatch(setUser(user));
    }

    dispatch(setLoading(false));
  }
}

/**add user progress */
export function AddProgress(request: AddUserProgressRequest) {
  return async function (dispatch: Function, getState: () => RootState) {
    dispatch(setLoading(true));

    const state = getState();
    const user = state.user.userData!;

    let addAnswer;
    try {
      addAnswer = await AddUserProgress(request);
    } catch (err) {}

    if(Boolean(addAnswer?.data.succeeded) == false) {
      dispatch(setError(addAnswer?.data?.errorMessage ?? "Что-то пошло не так..."));
    }

    if(addAnswer?.data.succeeded == true) {
      user.userProgresses = addAnswer.data.data;
      dispatch(setUser(user));
    }

    dispatch(setLoading(false));
  }
}

/**change avatar */
export function ChangeAvatar(newAvatar: File) {
  return async function (dispatch: Function, getState: () => RootState) {
    dispatch(setLoading(true));

    const state = getState();
    const user = state.user.userData!;
    const userId = user.id;

    let changeAvatar;
    try {
      changeAvatar = await ChangeUserAvatar({ userId: userId!, newPhoto: newAvatar });
    } catch (err) {
      if (Boolean(changeAvatar?.data.succeeded) == false) {
        dispatch(setError(changeAvatar?.data?.errorMessage ?? "Что-то пошло не так..."));
      }
    }

    if (changeAvatar?.data.succeeded) {
      user.photo = changeAvatar.data.data;
      dispatch(setUser(user));
    }

    dispatch(setLoading(false));
  }
}

/**change nick */
export function ChangeNick(newNick: string) {
  return async function (dispatch: Function, getState: () => RootState) {
    dispatch(setLoading(true));

    const state = getState();
    const user = state.user.userData!;
    const userId = user.id;

    let changeNick;
    try {
      changeNick = await ChangeUserNick({ userId: userId!, newNick });
    } catch (err) {
      if (Boolean(changeNick?.data.succeeded) == false) {
        dispatch(setError(changeNick?.data?.errorMessage ?? "Что-то пошло не так..."));
      }
    }

    if (changeNick?.data.succeeded) {
      user.nick = newNick;
      dispatch(setUser(user));
    }

    dispatch(setLoading(false));
  }
}

/**Login */
export function Login(loginData: UserLoginRequest) {
  return async function (dispatch: Function, getState: () => RootState) {
    dispatch(setLoading(true));

    const loginFetcher = new ApiFetcher(LoginQuery);

    let loginAnswer;

    try {
      loginAnswer = await loginFetcher.fetch(loginData);
    } catch (err) { }

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

    if (currentUser) {
      dispatch(setUser(currentUser.data.data));
    }

    dispatch(setError(""));
    dispatch(setLoading(false));
  }
}

/**register */
export function SignUp(request: SignUpRequest) {
  return async function (dispatch: Function, getState: () => RootState) {
    dispatch(setLoading(true));

    let signUpAnswer;

    try {
      signUpAnswer = await SignUpQuery(request);

      if (signUpAnswer.data.succeeded) dispatch(setToken(signUpAnswer.data.data.token));
    } catch (err) { } finally {
      if (Boolean(signUpAnswer?.data?.succeeded) == false) {
        dispatch(setError(signUpAnswer?.data?.errorMessage ?? "Что-то пошло не так..."));
      }
    }

    let currentUserAnswer;
    if (signUpAnswer?.data?.succeeded) {
      try {
        currentUserAnswer = await GetCurrentUserQuery();

        if (currentUserAnswer.data.succeeded) dispatch(setUser(currentUserAnswer.data.data));
      } catch (err) { }
    }

    dispatch(setError(""));
    dispatch(setLoading(false));

    if (signUpAnswer?.data?.succeeded && currentUserAnswer?.data?.succeeded) return true;
  }
}

/**logout */
export function Logout() {
  return async function (dispatch: Function, getState: () => RootState) {
    dispatch(clearUserStore());
  }
}

/**init user storage */
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

