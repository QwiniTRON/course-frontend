import styled from 'styled-components';
import { CenterMixin } from '../../../style';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

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