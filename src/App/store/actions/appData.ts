import { Lesson } from "../../../models/Lesson";
import { SetLessons } from "../consts";
import { AppDataAction } from "../types";

export function setLessons(lessons: Lesson[]): AppDataAction {
  return {
    type: SetLessons,
    lessons
  }
}