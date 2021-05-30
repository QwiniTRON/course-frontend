import { ApiQueryFunction, appApi } from "../..";

export type GetAllPracticesOrdersResponse = {
  id: string
  createdDate: string
  lessonName: string
  userNick: string
}[];

export const GetAllPracticesOrders: ApiQueryFunction<undefined, GetAllPracticesOrdersResponse> = (request, api = appApi) => {
  return api.get(`/practice`);
};