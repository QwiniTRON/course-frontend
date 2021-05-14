import { User } from "../../../models";
import { any, some } from "../consts";
import { UserAction, AnyAction, SomeAction } from "../types";

export type UserStorage = {
  userData?: User
  authentication?: string
}

const UserStorageInitial: UserStorage = {
  authentication: undefined,
  userData: undefined
}


const someHandler = (state: UserStorage, action: SomeAction) => {
  return state;
}

const anyHandler = (state: UserStorage, action: AnyAction) => {
  
  return state;
}

const handlers: {[p: string]: any} = {
  [some]: someHandler,
  [any]: anyHandler
};

export const userReducer = function(state: UserStorage = UserStorageInitial, action: UserAction): UserStorage {
  const currentHandler = handlers[action.type];
  return currentHandler? currentHandler.call(null, state, action) : state ;
}