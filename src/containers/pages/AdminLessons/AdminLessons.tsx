import { Box, CircularProgress, Dialog, Divider, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AppCard } from '../../../components';
import { AppLayout } from '../../../layouts';
import { GetLessons, GetLessonsResponse, IApiResponse } from '../../../server';
import { AdminLessonsContainer, AdminLessonsContent, AdminLessonsItem, AdminLessonsItemItems } from './styled';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AddIcon from '@material-ui/icons/Add';
import { appRoutes } from '../../../App';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton/IconButton';

type AdminLessonsProps = {}

export const AdminLessons: React.FC<AdminLessonsProps> = (props) => {
  const { data, isError, error, isLoading } = useQuery<AxiosResponse<IApiResponse<GetLessonsResponse>>>(["lessons"], GetLessons as any);
  const [instuctionOpen, setInstructionOpen] = React.useState(false);

  let lessons = data?.data.data;
  lessons?.sort((l, r) => l.index - r.index);


  return (
    <AppLayout>
      <AdminLessonsContainer>
        <Typography variant="h3">Уроки</Typography>
        <Box mt={1} pb={2}>
          <IconButton title="инструкция" color="primary" onClick={() => setInstructionOpen(true)}>
            <InfoIcon />
          </IconButton>
          <Divider />
        </Box>

        {isLoading && <CircularProgress />}
        <AdminLessonsContent>
          {lessons?.map((lesson) => (
            <Link key={lesson.id} to={appRoutes.getLessonView(lesson.id.toString())}>
              <AdminLessonsItem>
                <Box textAlign="center">{lesson.name}</Box>

                <AdminLessonsItemItems>
                  <ListAltIcon /> <div>номер</div> <div>{lesson.index}</div>
                  <AssignmentTurnedInIcon /> <div>тип</div> <div>{lesson.isPractice ? "* практика" : "теория"}</div>
                </AdminLessonsItemItems>
              </AdminLessonsItem>
            </Link>
          ))}

          {isLoading == false &&
            <Link key="create" to="/admin/lessons/create">
              <AdminLessonsItem>
                <Box display="flex" alignItems="center" justifyContent="center" p={3}>
                  <AddIcon />
                </Box>
              </AdminLessonsItem>
            </Link>
          }
        </AdminLessonsContent>

        {isLoading == false &&
          <Dialog onClose={() => setInstructionOpen(false)} aria-labelledby="customized-dialog-title" open={instuctionOpen}>
            <MuiDialogTitle id="customized-dialog-title">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                Инструкция <IconButton onClick={() => setInstructionOpen(false)}><CloseIcon /></IconButton>
              </Box>
            </MuiDialogTitle>
            <MuiDialogContent dividers>
              <p>Список уроков. Важно чтобы индексы уроков шли по порядку и начинались с 1.</p>
            </MuiDialogContent>
          </Dialog>
        }
      </AdminLessonsContainer >
    </AppLayout >
  );
};