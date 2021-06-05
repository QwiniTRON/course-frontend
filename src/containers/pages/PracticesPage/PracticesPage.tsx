import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { AppLayout } from '../../../layouts';
import { IApiResponse, GetLessonsResponse, GetAllPracticesOrders, GetAllPracticesOrdersResponse } from '../../../server';
import { Container, Content, Item, ItemItems } from './styled';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MailIcon from '@material-ui/icons/Mail';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from 'react-router-dom';
import { PracticeOrder } from '../../../models';
import { PracticeOrderView } from '../../../models/views/PracticeOrderView';
import { appRoutes } from '../../../App';


type PracticeCardProps = {
  practice: PracticeOrderView
}
const PracticeCard: React.FC<PracticeCardProps> = (props) => {
  return (
    <Link key={1} to={appRoutes.getAdminPractice(props.practice.id.toString())}>
      <Item>
        <Box textAlign="center">{props.practice.id}</Box>

        <ItemItems>
          <ListAltIcon /> <div>урок</div> <div>{props.practice.lessonName}</div>
          <MailIcon /> <div>ник</div> <div>{props.practice.userNick}</div>
          <DateRangeIcon /> <div>дата</div> <div>{new Date(props.practice.createdDate).toLocaleDateString("ru-Ru")}</div>
        </ItemItems>
      </Item>
    </Link>
  );
}

type PracticesPageProps = {}

const pageLimit = 16;
export const PracticesPage: React.FC<PracticesPageProps> = (props) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<AxiosResponse<IApiResponse<GetAllPracticesOrdersResponse>>>(
    ["practices"], (({ pageParam = 1 }) => {
      return GetAllPracticesOrders({ page: pageParam.toString()!, limit: pageLimit.toString() });
    }) as any,
    {
      getNextPageParam: (lastPage, pages) => {
        let total = lastPage.headers['x-total-count'];
        let page = pages.length + 1;

        if (page * pageLimit >= total) return undefined;

        return page;
      }
    }
  );

  const practices = data?.pages?.map(el => el.data.data).flat(1) ?? [];
  const cards = [];

  for (let i = 0; i < practices.length; i++) {
    const practice = practices[i];
    cards.push(<PracticeCard key={practice.id} practice={practice} />);
  }

  return (
    <AppLayout>
      <Container>
        <Typography className="fix" variant="h3">Практики пользователей</Typography>

        <Content>
          {cards}

          {isFetching == false && cards.length == 0 && <Typography variant="body1" color="primary">Пока ничего нет...</Typography>}
        </Content>

        {(isFetching || isFetchingNextPage) &&
          <Box mt={2}>
            <CircularProgress />
          </Box>
        }

        {isFetching == false && isFetchingNextPage == false &&
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="secondary"
              disabled={!hasNextPage || isFetchingNextPage}
              onClick={() => {
                fetchNextPage();
              }}>ещё</Button>
          </Box>
        }
      </Container>
    </AppLayout>
  );
};