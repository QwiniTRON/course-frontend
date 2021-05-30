import { ApiQueryFunction, appApi } from "../..";


export type ResolvePracticeRequest = {
  practiceId: string,
  teacherId: string
}

export type ResolvePracticeResponse = number

export const ResolvePractice: ApiQueryFunction<ResolvePracticeRequest, ResolvePracticeResponse> = (request, api = appApi) => {
  return api.put(`/practice/resolve`);
};