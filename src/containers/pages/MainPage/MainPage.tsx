import { Box, Divider, Typography } from '@material-ui/core';
import React from 'react';
import { appRoutes } from '../../../App';
import { AppLayout } from '../../../layouts';
import { Container, MainLink, Content, MainImg } from './styled';
import mainReact from '../../../appstatic/react_main.jpeg';
import neonReact from '../../../appstatic/react_neon.png';
import { AppImg } from '../../../components';


type MainPageProps = {}

export const MainPage: React.FC<MainPageProps> = (props) => {
  return (
    <AppLayout>
      <Container>
        <Typography className="fix" variant="h3">Главная страница</Typography>

        <Box paddingY={1}>
          <Divider />
        </Box>



        <Box>
          <p>
            Проект Reacter создан для изучения технологии React.js.
            На данном сайте вы можете проходить уроки и отслеживать свой прогресс прохождения уроков.
            Областью применения приложения является облегчение поиска и подачи материала для преподавателя
            и улучшение понимания, закрепления и повторения материала студентами по технологии React.js.
          </p>

          <MainImg src={mainReact} alt="main react" />

          <p>
            На данном сайте вы можете найти материалы по технологии React.js.
            Также на сайте присутствуют практические уроки, на которых вы можете
            отработать знания на практике и услышать конструктивную критику.
          </p>

          <MainImg src={neonReact} alt="neon react" />
        </Box>


        <Box pt={2}>
          <Divider />
        </Box>
        <Content>
          <MainLink to={appRoutes.Lessons}>Уроки</MainLink>
          <MainLink to={appRoutes.About}>О проекте</MainLink>
        </Content>
      </Container>
    </AppLayout>
  );
};