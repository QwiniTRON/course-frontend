import React from 'react';
import { AppLayout } from '../../../layouts';
import { Container, Content, Img, ImgLove, Planets } from './styled';
import ReactImage from '../../../appstatic/react_img.png';
import ReactLove from '../../../appstatic/react_logo.svg';
import { Box, Divider, Typography } from '@material-ui/core';

type AboutPageProps = {}

export const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <AppLayout>
      <Container>
        <Typography variant="h3">О проекте</Typography>
        <Box paddingY={1}>
          <Divider />
        </Box>

        <Content>
          <Planets>
            <Img src={ReactImage} alt="react image" />
            <ImgLove src={ReactLove} alt="react Love image" />
          </Planets>

          <Box mt={8} />
          <Typography variant="body1">
            React.js - JavaScript-библиотека для создания пользовательских интерфейсов.

            Данный проект создан для изучения технологии React.js. 

            Вы можите отслеживать свой прогресс прохождения практик, а также делать практические упражнения.
          </Typography>
        </Content>
      </Container>
    </AppLayout>
  );
};