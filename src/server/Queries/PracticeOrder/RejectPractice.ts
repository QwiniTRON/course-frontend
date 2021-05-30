import { ApiQueryFunction, appApi } from "../..";

export type RejectPracticeRequest = {
  practiceId: string,
  teacherId: string,
  description: string
}

export type RejectPracticeResponse = number

export const RejectPractice: ApiQueryFunction<RejectPracticeRequest, RejectPracticeResponse> = (request, api = appApi) => {
  return api.put(`/practice/reject`);
};