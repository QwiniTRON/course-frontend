import { Box, Button, CircularProgress, Divider, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../../App';
import { MarkDown } from '../../../components';
import { AppLayout } from '../../../layouts';
import { IApiResponse } from '../../../server';
import { GetLesson, GetLessonResponse, DeleteLesson, DeleteLessonRequest } from '../../../server';
import { AdminLessonViewContainer, Buttons, DeleteButton } from './styled';

type AdminViewLessonProps = {}

type AdminViewLessonRouteParams = {
  id: string
}

export const AdminViewLesson: React.FC<AdminViewLessonProps> = (props) => {
  const history = useHistory();
  const params = useParams<AdminViewLessonRouteParams>();
  const id = params.id;
  const { data, isError, error, isLoading } = useQuery<AxiosResponse<IApiResponse<GetLessonResponse>>>(
    [{ lessonId: id }] as any,
    (r: any) => GetLesson(r.queryKey[0]),
    {
      enabled: Boolean(id)
    }
  );
  const deleteReq = useMutation<any, any, DeleteLessonRequest, any>(DeleteLesson as any);
  const lesson = data?.data?.data;

  return (
    <AppLayout>
      <AdminLessonViewContainer>
        {(isLoading || deleteReq.isLoading) && <CircularProgress />}

        {isLoading == false && deleteReq.isLoading == false &&
          <>
            <Typography variant="h3">{lesson?.name}</Typography>
            <Typography variant="body1">номер: {lesson?.index}</Typography>
            <Typography variant="body1">тип: {lesson?.isPractice ? "практика" : "теория"}</Typography>

            <Box mt={1} />
            <Divider />

            <MarkDown md={lesson?.content!} />

            <Box mt={1} />
            <Divider />

            <Buttons>
              <DeleteButton
                disabled={deleteReq.isLoading}
                variant="contained"
                color="primary"
                onClick={() => {
                  deleteReq.mutateAsync({ lessonId: lesson?.id.toString()! })
                  .then((result) => {
                    history.push(appRoutes.AdminLessons);
                  });
                }}>
                удалить
              </DeleteButton>

              <Link to={appRoutes.getLessonEdit(lesson!?.id.toString())}>
                <Button variant="contained" color="primary">
                  редактировать
                </Button>
              </Link>
            </Buttons>
          </>
        }
      </AdminLessonViewContainer>
    </AppLayout>
  );
};