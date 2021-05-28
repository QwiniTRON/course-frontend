import { AxiosResponse } from "axios";
import { Lesson } from "../../../models/Lesson";
import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";
import { IApiResponse } from "../../ApiModel";


export type GetLessonsResponse = Lesson[];

export const GetLessons: ApiQueryFunction<undefined, GetLessonsResponse> = (request, api = appApi) => {
  return api.get("/lesson");
};