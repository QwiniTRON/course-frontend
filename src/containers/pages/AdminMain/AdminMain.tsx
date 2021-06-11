import { Typography } from '@material-ui/core';
import React from 'react';
import { appRoutes, ByRole, Secure } from '../../../App';
import { AppLayout } from '../../../layouts';
import { UserRoles } from '../../../models';
import { AdminLink, AdminMainContainer, AdminContent } from './styled';

type AdminMainProps = {}

export const AdminMain: React.FC<AdminMainProps> = (props) => {
  return (
    <AppLayout>
      <AdminMainContainer>
        <Typography className="fix" variant="h3">Админ панель</Typography>

        <AdminContent>
          <Secure politic={ByRole([UserRoles.Admin])}>
            <AdminLink to={appRoutes.AdminUsers}>Пользователи</AdminLink>
          </Secure>
          <AdminLink to={appRoutes.Practices}>Практики</AdminLink>
          <AdminLink to={appRoutes.AdminLessons}>Уроки</AdminLink>
          <AdminLink to={appRoutes.AdminInstruction}>инструкция</AdminLink>
        </AdminContent>
      </AdminMainContainer>
    </AppLayout>
  );
};