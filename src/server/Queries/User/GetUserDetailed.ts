import { ApiQueryFunction, appApi } from "../..";
import { User } from "../../../models";


export type GetUserDetailedRequest = {
  userId: string
}

export type GetUserDetailedResponse = User

export const GetUserDetailed: ApiQueryFunction<GetUserDetailedRequest, GetUserDetailedResponse> = (request, api = appApi) => {
  return api.get(`/user/${request?.userId}`);
};