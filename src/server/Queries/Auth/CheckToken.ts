import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";



export type CheckTokenResponse = {
  token: string
}

export const CheckCurrentToken: ApiQueryFunction<undefined, CheckTokenResponse> = (request, api = appApi) => {
  return api.post("/account/check");
};