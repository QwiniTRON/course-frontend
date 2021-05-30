import { ApiQueryFunction, appApi } from "../..";

export type AddPracticeOrderRequest = {
  userId: string
  lessonId: string

  codeFile: File
}

export type AddPracticeOrderResponse = number;

export const AddPracticeOrder: ApiQueryFunction<AddPracticeOrderRequest, AddPracticeOrderResponse> = (request, api = appApi) => {
  const data = new FormData();
  data.set("userId", request?.userId!);
  data.set("lessonId", request?.lessonId!);

  data.set("codeFile", request?.codeFile!, request?.codeFile.name);

  return api.post(`/practice`, data);
};