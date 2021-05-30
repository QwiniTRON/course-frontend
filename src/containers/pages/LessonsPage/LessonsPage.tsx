import { Box, CircularProgress, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { AppLayout } from '../../../layouts';
import { GetLessons, GetLessonsResponse, IApiResponse } from '../../../server';
import { Container, LessonsContent, LessonsItem, LessonsItemDisabled } from './styled';
import MailIcon from '@material-ui/icons/Mail';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Link } from 'react-router-dom';
import { Lesson } from '../../../models/Lesson';
import { useDispatch, useSelector } from 'react-redux';
import { appRoutes, RootState, setLessons } from '../../../App';

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
        <Typography variant="h3">Уроки</Typography>

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
      </Container>
    </AppLayout>
  );
};