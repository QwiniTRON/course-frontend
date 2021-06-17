import { Box, Button, CircularProgress, Dialog, Divider, IconButton, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import { appRoutes } from '../../../App';
import { MarkDown } from '../../../components';
import { AppLayout } from '../../../layouts';
import { IApiResponse } from '../../../server';
import { GetLesson, GetLessonResponse, DeleteLesson, DeleteLessonRequest } from '../../../server';
import { AdminLessonViewContainer, Buttons, DeleteButton } from './styled';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';

type AdminViewLessonProps = {}

type AdminViewLessonRouteParams = {
  id: string
}

export const AdminViewLesson: React.FC<AdminViewLessonProps> = (props) => {
  const history = useHistory();
  const params = useParams<AdminViewLessonRouteParams>();
  const id = params.id;

  const [deleteDialog, setDeleteDialog] = useState(false);

  const { data, isError, error, isLoading } = useQuery<AxiosResponse<IApiResponse<GetLessonResponse>>>(
    [{ lessonId: id }] as any,
    (r: any) => GetLesson(r.queryKey[0]),
    {
      enabled: Boolean(id)
    }
  );

  const deleteReq = useMutation<any, any, DeleteLessonRequest, any>(DeleteLesson as any);
  const lesson = data?.data?.data;

  if (Boolean(id)! == false || id == "undefined") {
    return <Redirect to={appRoutes.AdminMain} />
  }

  if (Boolean(lesson) == false && isLoading == false) {
    return <Redirect to={appRoutes.AdminMain} />
  }

  return (
    <AppLayout>
      <AdminLessonViewContainer>
        {(isLoading || deleteReq.isLoading) && <CircularProgress />}

        {isLoading == false && deleteReq.isLoading == false &&
          <>
            <Typography className="fix" variant="h3">{lesson?.name}</Typography>
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
                  setDeleteDialog(true);
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

      {isLoading == false &&
        <Dialog onClose={() => setDeleteDialog(false)} aria-labelledby="customized-dialog-title" open={deleteDialog}>
          <MuiDialogTitle id="customized-dialog-title">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              Инструкция <IconButton onClick={() => setDeleteDialog(false)}><CloseIcon /></IconButton>
            </Box>
          </MuiDialogTitle>
          <MuiDialogContent dividers>
            <p>
              Урок будет безвозвратно удалено, подтвердите действие.
            </p>
          </MuiDialogContent>
          <MuiDialogActions>
            <DeleteButton disabled={deleteReq.isLoading} variant="contained" color="primary" autoFocus onClick={() => {
              deleteReq.mutateAsync({ lessonId: lesson?.id.toString()! })
                .then((result) => {
                  history.push(appRoutes.AdminLessons);
                });
            }}>
              {deleteReq.isLoading ? <CircularProgress /> : "Удалить"}
            </DeleteButton>
          </MuiDialogActions>
        </Dialog>
      }
    </AppLayout>
  );
};