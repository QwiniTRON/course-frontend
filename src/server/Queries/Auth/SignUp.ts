import { ApiQueryFunction } from "../../ApiClient";
import { appApi } from "../../ApiConfigure";



export type SignUpResponse = { token: string }
export type SignUpRequest = {
  mail: string
  nick: string
  password: string

  userPhoto?: File
}

export const SignUpQuery: ApiQueryFunction<SignUpRequest, SignUpResponse> = (request, api = appApi) => {
  const userData = new FormData();
  userData.set("Mail", request?.mail!);
  userData.set("Nick", request?.nick!);
  userData.set("Password", request?.password!);

  if (request?.userPhoto && request.userPhoto instanceof File) userData.set("UserPhoto", request?.userPhoto!, request?.userPhoto?.name);
  return api.post("/account/signup", userData, { headers: { MimeType: "multipart/form-data" } });
};