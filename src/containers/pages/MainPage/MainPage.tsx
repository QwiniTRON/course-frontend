import { Box, Divider, Typography } from '@material-ui/core';
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

        <Box paddingY={1}>
          <Divider />
        </Box>

        <Box>
          Проект Reacter создан для изучения техонологии React.js. 
          На данном сайте вы можете проходить уроки и отслеживать свой прогресс прохождения уроков.
        </Box>

        <Content>
          <MainLink to={appRoutes.Lessons}>Уроки</MainLink>
          <MainLink to={appRoutes.About}>О проекте</MainLink>
        </Content>
      </Container>
    </AppLayout>
  );
};