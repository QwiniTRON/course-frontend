import { ApiQueryFunction, appApi } from "../..";

export type GetAllPracticesOrdersRequest = {
  search?: string
  page?: string
  limit?: string
}

export type GetAllPracticesOrdersResponse = {
  id: string
  createdDate: string
  lessonName: string
  userNick: string
}[];

export const GetAllPracticesOrders: ApiQueryFunction<GetAllPracticesOrdersRequest, GetAllPracticesOrdersResponse> = (request, api = appApi) => {
  const search = new URLSearchParams();
  if(request?.limit) search.set("limit", request?.limit);
  if(request?.page) search.set("page", request?.page);
  if(request?.search) search.set("search", request?.search);

  return api.get(`/practice`);
};