import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyLayout } from '../../../layouts';
import { Login, RootState } from '../../../App';
import { LoginBody, LoginContainer, LoginContent, LoginForm, LoginTitle, LoginFooter, useStyles, LoginLink, LoginPasswordInputGroup } from './styled';
import { Box, Button, CircularProgress, IconButton, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


type LoginPageProps = {}

const sleep = (duration: number) => {
  let dateStart = Date.now();
  while (Date.now() - dateStart < duration) {
    console.log(Date.now() - dateStart, duration);

  }
}


type LoginFormInputs = {
  mail: string
  password: string
}

const schema = Yup.object().shape({
  mail: Yup.string().required("поле обязательно"),
  password: Yup.string().required("поле обязательно")
});

export const LoginPage: React.FC<LoginPageProps> = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.user.loading);
  const loginError = useSelector((state: RootState) => state.user.error);
  const [isHide, setIsHide] = useState(true);

  const styles = useStyles();
  const { register, formState: { errors }, handleSubmit } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: LoginFormInputs) => {
    dispatch(Login({ mail: data.mail, password: data.password }));
  };
  const handleHideChange = () => {
    setIsHide((state) => !state);
  }


  return (
    <EmptyLayout>
      <LoginContainer key="LoginContainer">
        <LoginContent key="LoginContent">
          <LoginBody key="LoginBody">
            <LoginTitle key="LoginTitle" variant="h2">Вход</LoginTitle>

            <Typography color="error">{loginError}</Typography>
            <LoginForm key="LoginForm" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                disabled={loading}
                fullWidth
                id="outlined-basic"
                label="почта"
                variant="outlined"
                key="mailInput"
                error={Boolean(errors.mail?.message)}
                helperText={errors.mail?.message}
                {...register("mail")}
              />

              <Box mb={2} />

              <LoginPasswordInputGroup>
                <TextField
                  disabled={loading}
                  fullWidth
                  id="outlined-basic"
                  label="пароль"
                  variant="outlined"
                  key="passwordInput"
                  error={Boolean(errors.password?.message)}
                  helperText={errors.password?.message}
                  type={isHide ? "password" : "text"}
                  {...register("password")}
                />
                {isHide ?
                  <IconButton aria-label="show password" className={styles.passwordIcon} onClick={handleHideChange}>
                    <VisibilityIcon />
                  </IconButton>
                  :
                  <IconButton aria-label="hide password" className={styles.passwordIcon} onClick={handleHideChange}>
                    <VisibilityOffIcon />
                  </IconButton>
                }
              </LoginPasswordInputGroup>

              <LoginFooter>
                <Button disabled={loading} classes={{ root: styles.LoginButton }} variant="contained" color="primary" type="submit">
                  {loading ? <CircularProgress /> : "Войти"}
                </Button>

                <LoginLink to="some">
                  Нет аккаунта? Зарегистрируйте.
                </LoginLink>
              </LoginFooter>
            </LoginForm>
          </LoginBody>
        </LoginContent>
      </LoginContainer>
    </EmptyLayout>
  );
};