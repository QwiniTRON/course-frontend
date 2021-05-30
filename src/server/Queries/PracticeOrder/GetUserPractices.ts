import { ApiQueryFunction, appApi } from "../..";
import { PracticeOrder } from "../../../models";


export type GetUserPracticesResponse = PracticeOrder[];

export const GetUserPractices: ApiQueryFunction<undefined, GetUserPracticesResponse> = (request, api = appApi) => {
  return api.get(`/practice/current`);
};