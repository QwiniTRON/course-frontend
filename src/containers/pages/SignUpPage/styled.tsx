import { makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const RegisterTitle = styled(Typography)`
  text-align: center;

  ${props => props.theme.breakpoints.down("xs")} {
    .sign-up__content & {
      font-size: 28px;
    }
  }
`;

export const SignUpIcon = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0 ${props => props.theme.spacing(2)}px;
  cursor: pointer;
  object-fit: cover;
  object-position: center;
`;

export const RegisterForm = styled.form`
  margin-top: 30px;
`;

export const useStyles = makeStyles({
  RegisterButton: {
    width: "min(300px, 100%)"
  },

  passwordIcon: {
    position: "absolute",
    top: "50%",
    right: "2px",
    transform: "translateY(-50%)"
  }
});

export const SignUpFooter = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  margin-top: 50px;
  padding: 0px 1rem;
`;

export const SignUpPasswordInputGroup = styled.div`
  position: relative;

  & input {
    padding-right: 48px;
  }
`;