import styled from 'styled-components';
import { CenterMixin } from '../../../style';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

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
  margin-top: 30px;
`;

export const LoginFooter = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  margin-top: 50px;
  padding: 0px 1rem;
`;

export const LoginLink = styled(Link)`
  color: ${props => props.theme.palette.primary.main};
  margin-top: 1rem;
  transition: color 0.3s;

  &:visited {
    color: ${props => props.theme.palette.primary.main};
  }

  &:hover {
    color: ${props => props.theme.palette.primary.dark};
  }
`;

export const LoginPasswordInputGroup = styled.div`
  position: relative;

  & input {
    padding-right: 48px;
  }
`;

export const useStyles = makeStyles({
  LoginButton: {
    width: "min(300px, 100%)"
  },

  passwordIcon: {
    position: "absolute",
    top: "50%",
    right: "2px",
    transform: "translateY(-50%)"
  }
});


// LoginForm.toString() - вернёт класс;