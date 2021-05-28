import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";

export type ChangeUserNickRequest = {
  newNick: string
  userId: number
}

export const ChangeUserNick: ApiQueryFunction<ChangeUserNickRequest> = (request, api = appApi) => {
  return api.put("/user/nick", request);
};