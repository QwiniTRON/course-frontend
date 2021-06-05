import styled, { keyframes } from 'styled-components';
import { AppImg } from '../../../components';

export const Container = styled.div`
  padding: ${p => p.theme.spacing(2)}px;
  overflow: hidden;
  height: 100%;
`;

export const Content = styled.div`
  position: relative;
  margin-top: ${p => p.theme.spacing(2)}px;
`;

export const Planets = styled.div`
  position: relative;
  perspective: 800px;
  transform-style: preserve-3d;
  transform-origin: center;
`;

const rotate = keyframes`
  0% {
    transform: translateZ(450px) translateY(-45px) translateX(0) rotateZ(0deg);
  }
  25%{
    transform: translateZ(400px) translateY(-40px) translateX(-100px)  rotateZ(90deg);
  }
  50%{
    transform: translateZ(350px) translateY(-35px) translateX(0)  rotateZ(180deg);
  }
  75%{
    transform: translateZ(400px) translateY(-40px) translateX(+100px)  rotateZ(270deg);
  }
  100% {
    transform: translateZ(450px) translateY(-45px) translateX(0)  rotateZ(360deg);
  }
`;
const rotate1 = keyframes`
  from {
    transform: rotateZ(0deg) translateZ(400px) translateY(45px);
  }
  to{
    transform: rotateZ(-360deg) translateZ(400px) translateY(45px);
  }
`;

export const Img = styled.img`
  max-width: 200px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  display: block;

  transform-origin: 101px 115px;
  animation: ${rotate1} 7s infinite linear;
`;

export const ImgLove = styled.img`
  max-width: 55px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  display: block;
  transform: translateZ(450px) translateY(-45px);
  transform-origin: center;
  animation: ${rotate} 7s infinite linear;
`;

export const AboutImg = styled(AppImg)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  aspect-ratio: 4 / 3;
`;