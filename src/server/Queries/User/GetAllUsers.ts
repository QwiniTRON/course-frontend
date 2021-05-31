import { ApiQueryFunction, appApi } from "../..";
import { User } from "../../../models";

export type GetAllUsersRequest = {
  search?: string
  page?: string
  limit?: string
}

export type GetAllUsersResponse = User[]

export const GetAllUsers: ApiQueryFunction<GetAllUsersRequest, GetAllUsersResponse> = (request, api = appApi) => {
  const search = new URLSearchParams();
  if(request?.limit) search.set("limit", request?.limit);
  if(request?.page) search.set("page", request?.page);
  if(request?.search) search.set("search", request?.search);

  return api.get(`/user?`+search.toString());
};