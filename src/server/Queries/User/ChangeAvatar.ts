import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";

export type ChangeUserAvatarRequest = {
  userId: number
  newPhoto: File
}

export type ChangeUserAvatarResponse = string;

export const ChangeUserAvatar: ApiQueryFunction<ChangeUserAvatarRequest, ChangeUserAvatarResponse> = (request, api = appApi) => {
  const requestData = new FormData();
  requestData.set("userId", request?.userId.toString()!);
  requestData.set("newPhoto", request?.newPhoto!, request?.newPhoto.name);

  return api.put("/user/photo", requestData);
};