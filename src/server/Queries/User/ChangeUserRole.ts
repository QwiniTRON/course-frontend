import { ApiQueryFunction, appApi } from "../..";

export type ChangeUserRoleRequest = {
  userId: string
  newRole: string
}

export type ChangeUserRoleResponse = undefined

export const ChangeUserRole: ApiQueryFunction<ChangeUserRoleRequest, ChangeUserRoleResponse> = (request, api = appApi) => {
  return api.put(`/user/role`, request);
};