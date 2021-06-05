import { Box, CircularProgress, Dialog, Divider, IconButton, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { AppLayout } from '../../../layouts';
import { GetLessons, GetLessonsResponse, IApiResponse } from '../../../server';
import { Container, LessonsContent, LessonsItem, LessonsItemDisabled } from './styled';
import { Link } from 'react-router-dom';
import { Lesson } from '../../../models/Lesson';
import { useDispatch, useSelector } from 'react-redux';
import { appRoutes, RootState, setLessons } from '../../../App';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';

type LessonsPageProps = {}

type LessonCardProps = {
  disabled?: boolean
  lesson: Lesson
}

const LessonCard: React.FC<LessonCardProps> = (props) => {
  if (props.disabled) {
    return (
      <LessonsItemDisabled>
        <Box textAlign="center">{props.lesson.name}</Box>

        <Box display="flex" mt={3} justifyContent="space-between">
          <div>{props.lesson.index}</div>
          <div>{props.lesson.isPractice ? "практика" : "теория"}</div>
        </Box>
      </LessonsItemDisabled>
    );
  }

  return (
    <Link to={appRoutes.getLessonPage(props.lesson.id.toString())}>
      <LessonsItem>
        <Box textAlign="center">{props.lesson.name}</Box>

        <Box display="flex" mt={3} justifyContent="space-between">
          <div>{props.lesson.index}</div>
          <div>{props.lesson.isPractice ? "практика" : "теория"}</div>
        </Box>
      </LessonsItem>
    </Link>
  );
}


export const LessonsPage: React.FC<LessonsPageProps> = (props) => {
  const dispatch = useDispatch();
  const { data, isError, error, isLoading } = useQuery<AxiosResponse<IApiResponse<GetLessonsResponse>>>(["lessons"], GetLessons as any);
  const user = useSelector((state: RootState) => state.user.userData);

  const [instuctionOpen, setInstructionOpen] = React.useState(false);

  let lessons = data?.data.data;
  lessons?.sort((l, r) => l.index - r.index);

  useEffect(() => {
    if (isLoading == false && lessons) {
      dispatch(setLessons(lessons!));
    }
  }, [isLoading]);


  return (
    <AppLayout>
      <Container>
        <Typography className="fix" variant="h3">Уроки</Typography>
        <Box mt={1} pb={2}>
          <IconButton title="инструкция" color="primary" onClick={() => setInstructionOpen(true)}>
            <InfoIcon />
          </IconButton>
          <Divider />
        </Box>

        <LessonsContent>
          {isLoading && <CircularProgress />}

          {isLoading == false && lessons?.map((lesson, idx) => {
            let status = true;

            const prevLesson = lessons?.[idx - 1];
            status = !Boolean(user?.userProgresses.some(p => p.lessonId == prevLesson?.id));

            if (idx == 0) status = false;

            return (
              <LessonCard key={lesson.id} lesson={lesson} disabled={status} />
            );
          })}
        </LessonsContent>

        {isLoading == false &&
          <Dialog onClose={() => setInstructionOpen(false)} aria-labelledby="customized-dialog-title" open={instuctionOpen}>
            <MuiDialogTitle id="customized-dialog-title">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                Инструкция <IconButton onClick={() => setInstructionOpen(false)}><CloseIcon /></IconButton>
              </Box>
            </MuiDialogTitle>
            <MuiDialogContent dividers>
              <p>Список уроков. Для доступа к следующему уроку нужно пройти предидущий.</p>
            </MuiDialogContent>
          </Dialog>
        }
      </Container>
    </AppLayout>
  );
};