import { QueryFunction } from "../../ApiClient";

export const getTestQuery: QueryFunction = (api, request) => {
  return api.get("some").json();
};