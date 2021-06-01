import { ApiQueryFunction, appApi } from "../..";

export type BanUserRequest = {
  userForBannId: string
}

export type BanUserResponse = undefined

export const BanUser: ApiQueryFunction<BanUserRequest, BanUserResponse> = (request, api = appApi) => {
  return api.put(`/user/ban`, request);
};