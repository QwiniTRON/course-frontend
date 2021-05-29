import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";

export type CreateLessonRequest = {
  index: number,
  name: string,
  description: string,
  content: string,
  isPractice: boolean
}

export const CreateLesson: ApiQueryFunction<CreateLessonRequest, number> = (request, api = appApi) => {
  return api.post(`/lesson`, request);
};