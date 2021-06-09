import { reduceFileSize } from "../../../utils";
import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";

export type ChangeUserAvatarRequest = {
  userId: number
  newPhoto: File
}

export type ChangeUserAvatarResponse = string;

export const ChangeUserAvatar: ApiQueryFunction<ChangeUserAvatarRequest, ChangeUserAvatarResponse> = async (request, api = appApi) => {
  const requestData = new FormData();
  requestData.set("userId", request?.userId.toString()!);

  const photo = await new Promise((resolve) => {
    reduceFileSize(request?.newPhoto!, 90 * 90, 100, 100, 0.2, (blob: any) => {
      resolve(blob);
    });
  });
  requestData.set("newPhoto", photo as File, request?.newPhoto.name);

  return api.put("/user/photo", requestData, { headers: { MimeType: "multipart/form-data" } });
};