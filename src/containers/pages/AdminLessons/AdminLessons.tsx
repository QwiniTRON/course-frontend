import { Box, CircularProgress, Typography } from '@material-ui/core';
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

type AdminLessonsProps = {}

export const AdminLessons: React.FC<AdminLessonsProps> = (props) => {
  const { data, isError, error, isLoading } = useQuery<AxiosResponse<IApiResponse<GetLessonsResponse>>>(["lessons"], GetLessons as any);

  return (
    <AppLayout>
      <AdminLessonsContainer>
        <Typography variant="h3">Уроки</Typography>

        {isLoading && <CircularProgress />}
        <AdminLessonsContent>
          {data?.data.data.map((lesson) => (
            <Link key={lesson.id} to="/some">
              <AdminLessonsItem>
                <Box textAlign="center">{lesson.name}</Box>

                <AdminLessonsItemItems>
                  <ListAltIcon /> <div>номер</div> <div>{lesson.index}</div>
                  <ListAltIcon /> <div>тип</div> <div>{lesson.isPractice? "* практика" : "теория"}</div>
                </AdminLessonsItemItems>
              </AdminLessonsItem>
            </Link>
          ))}
        </AdminLessonsContent>
      </AdminLessonsContainer >
    </AppLayout >
  );
};