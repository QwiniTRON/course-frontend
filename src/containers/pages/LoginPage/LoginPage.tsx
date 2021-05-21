import React from 'react';
import { useDispatch } from 'react-redux';
import { EmptyLayout } from '../../../layouts';
import { Login } from '../../../App';
import { LoginBody, LoginContainer, LoginContent, LoginForm, LoginTitle } from './styled';
import { Box, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';


type LoginPageProps = {}

const sleep = (duration: number) => {
  let dateStart = Date.now();
  while (Date.now() - dateStart < duration) {
    console.log(Date.now() - dateStart, duration);

  }
}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <EmptyLayout>
      <LoginContainer key="LoginContainer">
        <LoginContent key="LoginContent">
          <LoginBody key="LoginBody">
            <LoginTitle key="LoginTitle" variant="h2">some</LoginTitle>

            <LoginForm key="LoginForm">
              <TextField fullWidth id="outlined-basic" label="mail" variant="outlined" name="mail" key="mailInput" />
              <Box mb={2} />
              <TextField fullWidth id="outlined-basic" label="password" variant="outlined" name="password" key="passwordInput" />

              <div>
                <Button variant="contained" color="primary">
                  Войти
                </Button>

                <Link to="some">
                  Нет аккаунта? Зарегистрируйте.
                </Link>
              </div>
            </LoginForm>
          </LoginBody>
        </LoginContent>
      </LoginContainer>
    </EmptyLayout>
  );
};