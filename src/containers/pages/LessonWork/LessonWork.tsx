import React, { useEffect } from 'react';
import { AppLayout } from '../../../layouts';
import { Container } from './styled';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, useParams } from 'react-router';
import { GetLesson, GetLessonResponse, IApiResponse, EditLesson, EditLessonRequest } from '../../../server';
import { useMutation, useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { Box, Button, CircularProgress, TextField, Typography } from '@material-ui/core';
import { appRoutes } from '../../../App';


type LessonWorkProps = {}

type AdminEditLessonRouteParams = {
  id: string
}

type LessonWorkInputs = {
  index: string
  name: string
  description: string
  content: string
}

const schema = Yup.object().shape({
  index: Yup.string().required("поле обязательно").test("index min 0", "минимум 1", (value) => {
    return parseInt(value!) > 0;
  }),
  name: Yup.string().required("поле обязательно"),
  description: Yup.string().required("поле обязательно"),
  content: Yup.string().required("поле обязательно")
});

export const LessonWork: React.FC<LessonWorkProps> = (props) => {
  const history = useHistory();
  const params = useParams<AdminEditLessonRouteParams>();
  const id = params.id;
  const { data, isError, error, isLoading } = useQuery<AxiosResponse<IApiResponse<GetLessonResponse>>>(
    [{ lessonId: id }] as any,
    (r: any) => GetLesson(r.queryKey[0]),
    {
      enabled: Boolean(id)
    }
  );
  const editReq = useMutation<any, any, EditLessonRequest, any>(EditLesson as any);
  const lesson = data?.data?.data;
  const { register, formState: { errors }, handleSubmit, setValue } = useForm<LessonWorkInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  useEffect(() => {
    if(isLoading == false) {
      setValue("content", lesson?.content!);
      setValue("description", lesson?.description!);
      setValue("name", lesson?.name!);
      setValue("index", lesson?.index.toString()!);
    }
  }, [isLoading]);

  const handleEdit = (data: LessonWorkInputs) => {
    editReq.mutateAsync({content: data.content, description: data.description, index: data.index, name: data.name, lessonId: lesson?.id.toString()!})
      .then((result) => history.push(appRoutes.getLessonView(lesson?.id.toString()!)));
  }

  return (
    <AppLayout>
      <Container>
        {(isLoading || editReq.isLoading) && <CircularProgress />}

        {isLoading == false && editReq.isLoading == false &&
          <form onSubmit={handleSubmit(handleEdit)}>
            <Typography variant="h3">{lesson?.name}</Typography>
            <Box mb={2} />

            <TextField
              fullWidth
              id="outlined-basic"
              label="название"
              variant="outlined"
              key="nameInput"
              defaultValue={lesson?.name}
              type="text"
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
              {...register("name")}
              onChange={(e) => setValue("name", e.target.value)}
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
              defaultValue={lesson?.index}
              error={Boolean(errors.index?.message)}
              helperText={errors.index?.message}
              {...register("index")}
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
              defaultValue={lesson?.description}
              error={Boolean(errors.description?.message)}
              helperText={errors.description?.message}
              {...register("description")}
              onChange={(e) => setValue("description", e.target.value)}
            />
            <Box mb={2} />

            <TextField
              fullWidth
              multiline
              id="outlined-basic2"
              label="содержание"
              variant="outlined"
              key="contentInput"
              type="text"
              defaultValue={lesson?.content}
              error={Boolean(errors.content?.message)}
              helperText={errors.content?.message}
              {...register("content")}
              onChange={(e) => setValue("content", e.target.value)}
            />
            <Box mb={2} />

            <Button
              disabled={Boolean(errors.content || errors.description || errors.index || errors.name)}
              variant="contained"
              type="submit"
              color="secondary">
              редактировать
            </Button>
          </form>
        }

      </Container>
    </AppLayout>
  );
};