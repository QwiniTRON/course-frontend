import { Typography } from '@material-ui/core';
import React from 'react';
import { appRoutes } from '../../../App';
import { AppLayout } from '../../../layouts';
import { Container, MainLink, Content } from './styled';


type MainPageProps = {}

export const MainPage: React.FC<MainPageProps> = (props) => {
  return (
    <AppLayout>
      <Container>
        <Typography variant="h3">Главная страница</Typography>

        <Content>
          <MainLink to={appRoutes.Lessons}>Уроки</MainLink>
          <MainLink to="/some">О проекте</MainLink>
        </Content>
      </Container>
    </AppLayout>
  );
};