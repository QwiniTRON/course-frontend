import { Lesson } from "../../../models/Lesson";
import { SetLessons } from "../consts";
import { AppDataAction, DataSetLessonsAction } from "../types";


export type AppDataStorage = {
  lessons: Lesson[]
}

export const AppDataInitial: AppDataStorage = {
  lessons: []
}



const setLessons = (state: AppDataStorage, action: DataSetLessonsAction) => {
  return Object.assign({}, state, {lessons: action.lessons});
}

const handlers: { [p: string]: any } = {
  [SetLessons]: setLessons
};

export const appDataReducer = function (state: AppDataStorage = AppDataInitial, action: AppDataAction): AppDataStorage {
  const currentHandler = handlers[action.type];
  return currentHandler ? currentHandler.call(null, state, action) : state;
}