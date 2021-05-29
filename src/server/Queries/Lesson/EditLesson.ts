import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";

export type EditLessonRequest = {
  lessonId: string
  index: string
  name: string
  description: string
  content: string
}

export const EditLesson: ApiQueryFunction<EditLessonRequest> = (request, api = appApi) => {
  return api.put(`/lesson/${request?.lessonId}`, request);
};