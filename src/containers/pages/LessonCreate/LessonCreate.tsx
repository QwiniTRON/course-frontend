import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, FormControlLabel, Switch, TextField, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { appRoutes } from '../../../App';
import { AppLayout } from '../../../layouts';
import { CreateLesson, CreateLessonRequest } from '../../../server/Queries/Lesson/CreateLesson';
import { Container } from './styled';

type LessonCreateProps = {}

type LessonCreateInputs = {
  index: string
  name: string
  description: string
  content: string
  isPractice: boolean
}

const schema = Yup.object().shape({
  index: Yup.string().required("поле обязательно").test("index min 0", "минимум 1", (value) => {
    return parseInt(value!) > 0;
  }),
  name: Yup.string().required("поле обязательно"),
  description: Yup.string().required("поле обязательно"),
  content: Yup.string().required("поле обязательно"),
  isPractice: Yup.boolean()
});

export const LessonCreate: React.FC<LessonCreateProps> = (props) => {
  const history = useHistory();
  const createReq = useMutation<any, any, CreateLessonRequest, any>(CreateLesson as any);
  const [createError, setCreateError] = useState("");
  const { register, formState: { errors }, handleSubmit, setValue } = useForm<LessonCreateInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const handleCreate = (data: LessonCreateInputs) => {
    createReq.mutateAsync({ Content: data.content, description: data.description, index: parseInt(data.index), isPractice: data.isPractice ?? false, name: data.name })
      .then(result => {
        if (Boolean(result.data?.succeeded) == false) setCreateError(result.data?.errorMessage || "что-то пошло не так...");

        if (result.data?.succeeded) history.push(appRoutes.getLessonView(result.data.data));
      });
  }


  return (
    <AppLayout>
      <Container>
        {createReq.isLoading && <CircularProgress />}

        <form onSubmit={handleSubmit(handleCreate)}>
          <Typography className="fix" variant="h3">Создание урока</Typography>
          <Typography className="fix" color="error">{createError}</Typography>
          <Box mb={2} />

          <TextField
            fullWidth
            id="outlined-basic"
            label="название"
            variant="outlined"
            key="nameInput"
            type="text"
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
            {...register("name")}
            onChange={(e) => setValue("name", e.target.value)}
            disabled={Boolean(errors.content || errors.description || errors.index || errors.name)}
          />
          <Box mb={2} />

          <TextField
            fullWidth
            id="outlined-basic1"
            label="индекс"
            variant="outlined"
            key="indexInput"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            error={Boolean(errors.index?.message)}
            helperText={errors.index?.message}
            {...register("index")}
            disabled={Boolean(errors.content || errors.description || errors.index || errors.name)}
            onChange={(e) => setValue("index", e.target.value)}
          />
          <Box mb={2} />

          <TextField
            fullWidth
            id="outlined-basic3"
            label="краткое описание"
            variant="outlined"
            key="descriptionInput"
            type="text"
            error={Boolean(errors.description?.message)}
            helperText={errors.description?.message}
            {...register("description")}
            disabled={Boolean(errors.content || errors.description || errors.index || errors.name)}
            onChange={(e) => setValue("description", e.target.value)}
          />
          <Box mb={2} />

          <TextField
            fullWidth
            multiline
            rowsMax="40"
            id="outlined-basic2"
            label="содержание"
            variant="outlined"
            key="contentInput"
            type="text"
            error={Boolean(errors.content?.message)}
            helperText={errors.content?.message}
            {...register("content")}
            onChange={(e) => {
              e.preventDefault();
              setValue("content", e.target.value);
            }}
            disabled={Boolean(errors.content || errors.description || errors.index || errors.name)}
          />
          <Box mb={2} />

          <FormControlLabel
            control={
              <Switch
                {...register("isPractice")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue("isPractice", e.target.checked as any)}
                disabled={Boolean(errors.content || errors.description || errors.index || errors.name)}
              />
            }
            disabled={Boolean(errors.content || errors.description || errors.index || errors.name)}
            label="практика"
          />
          <Box mb={2} />

          <Button
            disabled={Boolean(errors.content || errors.description || errors.index || errors.name)}
            variant="contained"
            type="submit"
            color="secondary">
            {createReq.isLoading && <Box mr={2}><CircularProgress color="primary" /></Box>}
            создать
          </Button>
        </form>

      </Container>
    </AppLayout>
  );
};