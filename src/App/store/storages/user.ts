import { User } from "../../../models";
import {
  UserSetToken,
  UserSetData,
  UserSetError,
  UserSetLoading,
  UserClearStore
} from "../consts";
import {
  UserAction,
  UserSetDataAction,
  UserSetErrorAction,
  UserSetLoadingAction,
  UserSetTokenAction,
  UserClearStoreAction
} from "../types";

export type UserStorage = {
  userData?: User
  authentication?: string
  error: string
  loading: boolean
}

const UserStorageInitial: UserStorage = {
  authentication: undefined,
  userData: undefined,
  error: "",
  loading: false
}


const setAuthenticationToken = (state: UserStorage, action: UserSetTokenAction) => {
  return Object.assign({}, state, { authentication: action.token });
}

const setUserData = (state: UserStorage, action: UserSetDataAction) => {
  return Object.assign({}, state, { userData: action.user });
}

const setUserLoading = (state: UserStorage, action: UserSetLoadingAction) => {
  return Object.assign({}, state, { loading: action.loading });
}

const setUserError = (state: UserStorage, action: UserSetErrorAction) => {
  return Object.assign({}, state, { error: action.error });
}

const clearStore = (state: UserStorage, action: UserClearStoreAction) => {
  return Object.assign({}, {
    authentication: undefined,
    userData: undefined,
    error: "",
    loading: false
  });
}


const handlers: { [p: string]: any } = {
  [UserSetToken]: setAuthenticationToken,
  [UserSetData]: setUserData,
  [UserSetError]: setUserError,
  [UserSetLoading]: setUserLoading,
  [UserClearStore]: clearStore
};

export const userReducer = function (state: UserStorage = UserStorageInitial, action: UserAction): UserStorage {
  const currentHandler = handlers[action.type];
  return currentHandler ? currentHandler.call(null, state, action) : state;
}