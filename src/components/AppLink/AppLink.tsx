import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppLink = styled(Link)`
  color: ${props => props.theme.palette.primary.main};
  margin-top: 1rem;
  transition: color 0.3s;
  text-align: center;

  &:visited {
    color: ${props => props.theme.palette.primary.main};
  }

  &:hover {
    color: ${props => props.theme.palette.primary.dark};
  }
`;