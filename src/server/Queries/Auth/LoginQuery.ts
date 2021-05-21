import {ApiQueryFunction} from '../../ApiClient';
import { appApi } from "../../ApiConfigure";


export type UserLoginRequest = {
  mail: string,
  password: string
}

export type UserLoginResponse = {
  token: string
}

export const LoginQuery: ApiQueryFunction<UserLoginRequest, UserLoginResponse> = (request, api = appApi) => {
  return api.post("/account/signin", request);
};