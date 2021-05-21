import { User } from '../../models';
import {
  UserSetToken,
  UserSetData,
  UserSetError,
  UserSetLoading
} from './consts';

// USER
export type UserSetTokenAction = {
  type: typeof UserSetToken,
  token: string
}
export type UserSetDataAction = {
  type: typeof UserSetData,
  user: User
}
export type UserSetErrorAction = {
  type: typeof UserSetError,
  error: string
}
export type UserSetLoadingAction = {
  type: typeof UserSetLoading,
  loading: boolean
}

export type UserAction = UserSetTokenAction | UserSetDataAction | UserSetErrorAction | UserSetLoadingAction;