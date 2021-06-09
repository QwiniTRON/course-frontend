import { reduceFileSize } from "../../../utils";
import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";



export type SignUpResponse = { token: string }
export type SignUpRequest = {
  mail: string
  nick: string
  password: string

  userPhoto?: File
}

export const SignUpQuery: ApiQueryFunction<SignUpRequest, SignUpResponse> = async (request, api = appApi) => {
  const userData = new FormData();
  userData.set("Mail", request?.mail!);
  userData.set("Nick", request?.nick!);
  userData.set("Password", request?.password!);

  if (request?.userPhoto) {
    const photo = await new Promise((resolve) => {
      reduceFileSize(request?.userPhoto, 90 * 90, 100, 100, 0.6, (blob: any) => {
        resolve(blob);
      });
    });
    
    userData.set("UserPhoto", photo as File, request?.userPhoto?.name);
  }
  return api.post("/account/signup", userData, { headers: { MimeType: "multipart/form-data" } });
};