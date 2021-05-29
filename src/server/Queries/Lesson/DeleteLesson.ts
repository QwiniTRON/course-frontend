import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";

export type DeleteLessonRequest = {
  lessonId: string
}

export const DeleteLesson: ApiQueryFunction<DeleteLessonRequest, undefined> = (request, api = appApi) => {
  return api.delete(`/lesson/${request?.lessonId}`);
};