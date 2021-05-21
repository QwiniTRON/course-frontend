import { User } from "../../../models";
import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";

export const GetCurrentUserQuery: ApiQueryFunction<undefined, User> = (request, api = appApi) => {
  return api.get("/user/current");
};