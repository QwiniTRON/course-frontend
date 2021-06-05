import styled, { keyframes } from 'styled-components';

const ShadowAnimate = keyframes`
  from{
    box-shadow: 0 0 16px 0 #000, 0 24px 16px -20px #4d7cff;
  }
  to {
    box-shadow: 0 0 16px 0 #000, 0 22px 24px -18px #4d7cff;
  }
`;

export const MainImage = styled.img`
  border-radius: 8px;
  margin: ${p => p.theme.spacing(2)}px 0px;
  box-shadow: 0 0 16px 0 #000, 0 24px 16px -20px #4d7cff;

  object-fit: cover;
  object-position: center;

  animation: ${ShadowAnimate} 1s infinite alternate;
`;