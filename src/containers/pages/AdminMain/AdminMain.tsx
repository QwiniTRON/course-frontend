import { Typography } from '@material-ui/core';
import React from 'react';
import { appRoutes } from '../../../App';
import { AppLayout } from '../../../layouts';
import { AdminLink, AdminMainContainer, AdminContent } from './styled';

type AdminMainProps = {}

export const AdminMain: React.FC<AdminMainProps> = (props) => {
  return (
    <AppLayout>
      <AdminMainContainer>
        <Typography variant="h3">Админ панель</Typography>

        <AdminContent>
          <AdminLink to={appRoutes.AdminUsers}>Пользователи</AdminLink>
          <AdminLink to={appRoutes.Practices}>Практики</AdminLink>
          <AdminLink to={appRoutes.AdminLessons}>Уроки</AdminLink>
          <AdminLink to={appRoutes.AdminInstruction}>инструкция</AdminLink>
        </AdminContent>
      </AdminMainContainer>
    </AppLayout>
  );
};