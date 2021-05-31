import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--main-2);
  height: 100%;
  padding: 75px 15px;
`;

export const SplashLoader = styled.div`
  position: relative;
	margin: 0 auto;
	width: 150px;
	height: 150px;
	display: block;
	overflow: hidden;

	div {
		height: 100%;
	}

  &, & div {
    border-radius: 50%;
	  padding: 8px;
	  border: 2px solid transparent;
	  animation: rotate linear 3.5s infinite;
    border-radius: 50%;
    padding: 4px;
    animation: rotate2 4s infinite linear;
  }

  &:hover, & div:hover {
    animation-play-state: paused;
  } 

  &, * {
    will-change: transform;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 16px;
`;