import { ApiQueryFunction, appApi } from "../..";
import { PracticeOrderDetailedView } from "../../../models";


export type GetPracticeInfoRequest = {
  practiceId: string
}

export type GetPracticeInfoResponse = PracticeOrderDetailedView

export const GetPracticeInfo: ApiQueryFunction<GetPracticeInfoRequest, GetPracticeInfoResponse> = (request, api = appApi) => {
  return api.get(`/practice/${request?.practiceId}`);
};