import { ApiQueryFunction, appApi } from "../..";
import { UserProgres } from "../../../models";

export type AddUserProgressRequest = {
  userId: string
  lessonId: string
}

export type AddUserProgressResponse = UserProgres[];

export const AddUserProgress: ApiQueryFunction<AddUserProgressRequest, AddUserProgressResponse> = (request, api = appApi) => {
  return api.post(`/progress`, request);
};