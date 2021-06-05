import React from 'react';
import { AppLayout } from '../../../layouts';
import { Container, Content, Img, ImgLove, Planets, AboutImg } from './styled';
import ReactImage from '../../../appstatic/react_img.png';
import ReactLove from '../../../appstatic/react_logo.svg';
import { Box, Divider, Typography } from '@material-ui/core';
import globalImg from '../../../appstatic/globalweb.webp';
import reactMaterial from '../../../appstatic/react_material.png';
import { AppImg } from '../../../components';

type AboutPageProps = {}

export const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <AppLayout>
      <Container>
        <Typography className="fix" variant="h3">О проекте</Typography>
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
            Данный проект поможет вам изучить технологию React.js и понять её преимущества и недостатки.
          </Typography>

          <AboutImg alt="react" src={reactMaterial} />
          <Typography variant="body1">
            React — JavaScript-библиотека с открытым исходным кодом
            для разработки пользовательских интерфейсов. React разрабатывается и
            поддерживается Facebook, Instagram и сообществом отдельных
            разработчиков и корпораций. React может использоваться
            для разработки одностраничных и мобильных приложений
          </Typography>
          <AboutImg alt="react" src={globalImg} />
          <Typography variant="body1">
            В ходе курса мы изучим с вами react от основ до продвинутых тем. Надеемся что вам понравится. Давайте учиться вместе.
          </Typography>
          <Typography variant="h5">
            Для написания материалов к курсу использовались материалы сайта - https://metanit.com/
          </Typography>
          <Typography variant="h5">
            Большое спасибо автору данного сайта. Евгений просто Программист с большой буквы, для изучения других тем советую данный сайт.
          </Typography>
        </Content>
      </Container>
    </AppLayout>
  );
};