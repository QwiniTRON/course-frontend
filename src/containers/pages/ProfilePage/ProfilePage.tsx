import { Box, Button, CircularProgress, IconButton, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appFiles, RootState } from '../../../App';
import { AppLayout } from '../../../layouts';
import { ProfileContainer, NickBlock, useStyles, AvatarButtons } from './styled';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DoneIcon from '@material-ui/icons/Done';
import { SignUpIcon } from '../SignUpPage/styled';
import ClearIcon from '@material-ui/icons/Clear';
import { PhotoCamera } from '@material-ui/icons';
import { ChangeAvatar, ChangeNick } from '../../../App';

type ProfilePageProps = {}

type ProfileInputs = {
  nick: string
  photo: FileList
}

const schema = Yup.object().shape({
  nick: Yup.string().required("поле обязательно").min(6, "не короче 6 символов").max(64, "не длиннее 64 символов")
});

export const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const styles = useStyles();

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.userData);
  const loading = useSelector((state: RootState) => state.user.loading);
  const mainError = useSelector((state: RootState) => state.user.error);

  const { register, formState: { errors }, watch, reset } = useForm<ProfileInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const newNick = watch("nick");
  const newPhoto = watch("photo");
  const userPhoto = newPhoto?.[0] ? URL.createObjectURL(newPhoto?.[0]) : appFiles(user?.photo!);
  const hasPhoto = Boolean(newPhoto?.[0]);
  const nickHasChanged = newNick && (newNick != user?.nick) && (Boolean(errors.nick?.message) == false);


  const changeAvatar = () => {
    dispatch(ChangeAvatar(newPhoto[0]));
  }

  const changeNick = () => {
    dispatch(ChangeNick(newNick));
  }


  return (
    <AppLayout>
      <ProfileContainer>
        <Typography className="fix" key="maintitle" variant="h3">Профиль</Typography>

        {loading && <CircularProgress key="loading" />}

        <Typography key="mainError" color="error">{mainError}</Typography>
        <Box mb={1} key="box1" />

        <Typography key="nickTitle">Ник</Typography>
        <Box mb={1} key="box2" />
        <NickBlock key="Nick">

          <TextField
            fullWidth
            id="outlined-basic"
            label="ник"
            variant="outlined"
            key="nickInput"
            defaultValue={user?.nick}
            type="text"
            disabled={loading}
            error={Boolean(errors.nick?.message)}
            helperText={errors.nick?.message}
            {...register("nick")}
          />

          {nickHasChanged && !errors.nick?.message &&
            <IconButton disabled={loading} classes={{ root: styles.nickSaveButton }} color="primary" onClick={changeNick}>
              <DoneIcon />
            </IconButton>}
        </NickBlock>
        <Box key="box3" mb={2} />

        <Typography>Аватар</Typography>
        <Box mb={1} key="box4" />
        <div key="Avatar">
          <input
            accept="image/*"
            key="photoInput"
            className="visually-hidden"
            id="userPhoto"
            type="file"
            disabled={loading}
            {...register("photo")}
          />
          <label htmlFor="userPhoto">
            <Button
              disabled={loading}
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<PhotoCamera />}
              component="span"
            >
              {hasPhoto ? "поменять фото" : "выбрать фото"}
            </Button>
          </label>
          <AvatarButtons>
            <label htmlFor="userPhoto">
              <SignUpIcon src={userPhoto} />
            </label>
            {hasPhoto &&
              <IconButton disabled={loading} aria-label="clear avatar" key="clearAvatar" onClick={() => {
                reset({ photo: undefined });
              }}>
                <ClearIcon />
              </IconButton>
            }
            {hasPhoto &&
              <IconButton disabled={loading} aria-label="save avatar" key="saveAvatar" color="secondary" onClick={changeAvatar}>
                <DoneIcon />
              </IconButton>
            }
          </AvatarButtons>
        </div>
      </ProfileContainer>
    </AppLayout>
  );
};