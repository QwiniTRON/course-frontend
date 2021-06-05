import { Box, Button, CircularProgress, FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import { appRoutes } from '../../../App';
import { AppLayout } from '../../../layouts';
import { IApiResponse, GetUserDetailedResponse, GetUserDetailed, BanUserRequest, BanUser, ChangeUserRoleRequest, ChangeUserRole } from '../../../server';
import { Container, Content, RoleRow } from './stlyed';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MailIcon from '@material-ui/icons/Mail';
import WorkIcon from '@material-ui/icons/Work';

type AdminUserProps = {}

type AdminUserRouteParams = {
  id: string
}

export const AdminUser: React.FC<AdminUserProps> = (props) => {
  const params = useParams<AdminUserRouteParams>();
  const id = params.id;

  const [userRole, setUserRole] = useState(0);
  const [roleError, setRoleError] = useState("");

  const { data, isError, error, isLoading, refetch } = useQuery<AxiosResponse<IApiResponse<GetUserDetailedResponse>>>(
    [{ userId: id }] as any,
    (r: any) => GetUserDetailed(r.queryKey[0]),
    {
      enabled: Boolean(id)
    }
  );
  const banReq = useMutation<any, any, BanUserRequest, any>(BanUser as any);
  const changeRoleReq = useMutation<any, any, ChangeUserRoleRequest, any>(ChangeUserRole as any);
  const user = data?.data?.data;

  const loading = banReq.isLoading || changeRoleReq.isLoading || isLoading;

  useEffect(() => {
    if (isLoading == false && user) {
      setUserRole(user.roles[0]);
    }
  }, [isLoading]);

  const changeRoleHandle = () => {
    if (user?.roles[0] == userRole) return setRoleError("эта роль уже выбрана");

    changeRoleReq.mutateAsync({userId: user?.id?.toString()!, newRole: userRole.toString()})
      .then((result) => refetch());
  }

  const banHandle = () => {
    banReq.mutateAsync({userForBannId: user?.id.toString()!})
      .then((result) => refetch());
  }

  if (Boolean(id) == false) return <Redirect to={appRoutes.App} />


  return (
    <AppLayout>
      <Container>
        {loading && <CircularProgress />}

        {isLoading == false && user &&
          <Typography className="fix" variant="h3">{user.nick}</Typography>
        }

        {isLoading == false &&
          <div>
            <Content>
              <AssignmentIndIcon /> <div>id</div> <div>{user?.id}</div>
              <MailIcon /> <div>mail</div> <div>{user?.mail}</div>
            </Content>

            <RoleRow>
              <div><WorkIcon /></div>
              <div>роль</div>
              <div>
                <FormControl variant="outlined" fullWidth error={Boolean(roleError)} disabled={loading}>
                  <InputLabel id="rolelabel">Age</InputLabel>
                  <Select
                    labelId="rolelabel"
                    id="rolelabel1"
                    value={userRole}
                    onChange={(e: React.ChangeEvent<{ value: any }>) => setUserRole(e.target.value)}
                    label="Age"
                    disabled={loading}
                  >
                    <MenuItem value={0}>Ученик</MenuItem>
                    <MenuItem value={1}>Учитель</MenuItem>
                    <MenuItem value={2}>Админ</MenuItem>
                  </Select>
                  <FormHelperText>{roleError}</FormHelperText>
                </FormControl>
              </div>
              <Button variant="text" color="primary" onClick={changeRoleHandle} disabled={loading}>
                {changeRoleReq.isLoading ? <CircularProgress size={14} /> : "изменить"}
              </Button>
            </RoleRow>

            <Box>
              <Button
                onClick={banHandle}
                variant={user?.isBanned ? "contained" : "text"} color="primary"
                disabled={loading}>
                {banReq.isLoading && <CircularProgress size={14} />}
                {user?.isBanned ? "разбанить пользователя" : "забанить пользователя"}
              </Button>
            </Box>
          </div>
        }
      </Container>
    </AppLayout>
  );
};