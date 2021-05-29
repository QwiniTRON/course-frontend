import { LessonDetailed } from "../../../models/views/LessonDetailed";
import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";

export type GetLessonRequest = {
  lessonId: string
}

export type GetLessonResponse = LessonDetailed;

export const GetLesson: ApiQueryFunction<GetLessonRequest, GetLessonResponse> = (request, api = appApi) => {
  return api.get(`/lesson/${request?.lessonId}`);
};