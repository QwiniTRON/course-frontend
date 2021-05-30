import { User } from '../../models';
import { Lesson } from '../../models/Lesson';
import {
  UserSetToken,
  UserSetData,
  UserSetError,
  UserSetLoading,
  UserClearStore,
  SetLessons
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
export type UserClearStoreAction = {
  type: typeof UserClearStore
}

export type UserAction = UserSetTokenAction | UserSetDataAction | UserSetErrorAction | UserSetLoadingAction | UserClearStoreAction;

// APPDATA
export type DataSetLessonsAction = {
  type: typeof SetLessons,
  lessons: Lesson[]
}

export type AppDataAction = DataSetLessonsAction;