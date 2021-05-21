import styled from 'styled-components';
import { CenteredMixin, CenterMixin } from '../../../style';
import { Typography } from '@material-ui/core';

export const LoginContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const LoginContent = styled.div`
  min-height: 100%;
  ${CenterMixin}
  padding: ${props => props.theme.spacing(2)}px;
`;

export const LoginBody = styled.div`
  width: min(100%, 550px);
  padding: ${props => props.theme.spacing(2)}px;
  background-color: ${props => props.theme.palette.layout.paper};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows[4]};
`;

export const LoginTitle = styled(Typography)`
  text-align: center;
`;

export const LoginForm = styled.form`
  margin-top: 60px;
`;

// LoginForm.toString() - вернёт класс;