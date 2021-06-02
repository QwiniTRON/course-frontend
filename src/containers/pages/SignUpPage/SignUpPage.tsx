import { Box, Button, CircularProgress, IconButton, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppConsts, appRoutes, RootState, SignUp } from '../../../App';
import { AppCard, AppLink, CenterCard } from '../../../components';
import { EmptyLayout } from '../../../layouts';
import { RegisterForm, RegisterTitle, useStyles, SignUpFooter, SignUpPasswordInputGroup, SignUpIcon } from './styled';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { PhotoCamera } from '@material-ui/icons';
import ClearIcon from '@material-ui/icons/Clear'; 
import { useHistory } from 'react-router';


type SignUpPageProps = {}


type SignUpInputs = {
  mail: string
  password: string
  rpassword: string
  nick: string
  photo: FileList
}

const schema = Yup.object().shape({
  mail: Yup.string().trim().required("поле обязательно").email("адрес не по формату"),
  password: Yup.string().trim().required("поле обязательно").min(6, "не короче 6 символов").max(64, "не длиннее 64 символов"),
  rpassword: Yup.string().trim().required("поле обязательно").test("password equal", "пароли должны совпадать", function (value) {
    return this.parent.password == value;
  }),
  nick: Yup.string().trim().required("поле обязательно").min(6, "не короче 6 символов").max(64, "не длиннее 64 символов")
});

export const SignUpPage: React.FC<SignUpPageProps> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const styles = useStyles();
  const loading = useSelector((state: RootState) => state.user.loading);
  const signUpError = useSelector((state: RootState) => state.user.error);

  const [isHide, setIsHide] = useState(true);

  const { register, formState: { errors }, handleSubmit, getValues, watch, reset } = useForm<SignUpInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });
  watch("photo");
  const formValues = getValues();
  const userPhoto = formValues?.photo?.[0] ? URL.createObjectURL(formValues?.photo?.[0]) : AppConsts.DefaultPhotoPath;
  const hasPhoto = Boolean(formValues?.photo?.[0]);

  const onSubmit = (data: SignUpInputs) => {
    if(loading === false) {
      const signUp = dispatch(SignUp({mail: data.mail.trim(), nick: data.nick.trim(), password: data.password.trim(), userPhoto: data.photo[0]}));
      (signUp as any).then((signUpResult: boolean) => {
        if(signUpResult) history.push(appRoutes.App);
      });
    }
  };

  const handleHideChange = () => {
    setIsHide((state) => !state);
  }

  return (
    <EmptyLayout>
      <CenterCard key="CenterCard">
        <AppCard key="signupbody">
          <div className="sign-up__content">
            <RegisterTitle variant="h2">Регистрация</RegisterTitle>
            <Typography color="error">{signUpError}</Typography>
            <RegisterForm onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                id="mailInput"
                label="почта"
                variant="outlined"
                key="mailInput"
                disabled={loading}
                error={Boolean(errors.mail?.message)}
                helperText={errors.mail?.message}
                {...register("mail")}
              />
              <Box mb={2} />

              <TextField
                fullWidth
                id="nickInput"
                label="ник"
                variant="outlined"
                key="nickInput"
                disabled={loading}
                error={Boolean(errors.nick?.message)}
                helperText={errors.nick?.message}
                {...register("nick")}
              />
              <Box mb={2} />

              <SignUpPasswordInputGroup>
                <TextField
                  fullWidth
                  id="passwordInput"
                  label="пароль"
                  variant="outlined"
                  key="passwordInput"
                  type={isHide ? "password" : "text"}
                  disabled={loading}
                  error={Boolean(errors.password?.message)}
                  helperText={errors.password?.message}
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
              </SignUpPasswordInputGroup>
              <Box mb={2} />

              <TextField
                fullWidth
                id="rpasswordInput"
                label="повторите пароль"
                variant="outlined"
                key="rpasswordInput"
                disabled={loading}
                error={Boolean(errors.rpassword?.message)}
                helperText={errors.rpassword?.message}
                type={isHide ? "password" : "text"}
                {...register("rpassword")}
              />
              <Box mb={2} />

              <Box mb={1}>
                <Typography>Аватар пользователя</Typography>
              </Box>
              <input
                accept="image/*"
                key="photoInput"
                className="visually-hidden"
                id="userPhoto"
                type="file"
                {...register("photo")}
              />
              <label htmlFor="userPhoto">
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  startIcon={<PhotoCamera />}
                  component="span"
                >
                  {hasPhoto ? "поменять фото" : "выбрать фото"}
                </Button>
              </label>
              <Box mt={2} display="flex" alignItems="center">
                <label htmlFor="userPhoto">
                  <SignUpIcon src={userPhoto} />
                </label>
                {hasPhoto &&
                  <IconButton aria-label="clear avatar" onClick={() => {
                    reset({ photo: undefined });
                  }}>
                    <ClearIcon />
                  </IconButton>
                }
              </Box>


              <SignUpFooter>
                <Button disabled={loading} classes={{ root: styles.RegisterButton }} variant="contained" color="primary" type="submit">
                  {loading ? <CircularProgress /> : "Регистрация"}
                </Button>
                <AppLink to={appRoutes.Login} key="signuplink">
                  Есть аккаунт? Войдите.
              </AppLink>
              </SignUpFooter>
            </RegisterForm>
          </div>
        </AppCard>
      </CenterCard>
    </EmptyLayout>
  );
};