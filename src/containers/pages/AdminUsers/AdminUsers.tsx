import { Box, Button, CircularProgress, Dialog, Divider, IconButton, TextField, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React, { useRef, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { AppLayout } from '../../../layouts';
import { IApiResponse, GetAllUsersResponse, GetAllUsers } from '../../../server';
import { Container, Content, Search, Item, ItemItems, ToolButtons } from './styled';
import SearchIcon from '@material-ui/icons/Search';
import { User, UserRoles } from '../../../models';
import { appRoutes } from '../../../App';
import { Link } from 'react-router-dom';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MailIcon from '@material-ui/icons/Mail';
import WorkIcon from '@material-ui/icons/Work';
import RefreshIcon from '@material-ui/icons/Refresh';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';


type UserCardProps = {
  user: User
};
const UserCard: React.FC<UserCardProps> = (props) => {
  let userRole = props.user.roles[0];
  let userRoleString = "ученик";
  if (userRole == 1) userRoleString = "учитель";
  if (userRole == 2) userRoleString = "админ";

  return (
    <Link key={1} to={appRoutes.getAdminUser(props.user.id.toString())}>
      <Item>
        <Box textAlign="center">{props.user.nick}</Box>

        <ItemItems>
          <AssignmentIndIcon /> <div>id</div> <div>{props.user.id}</div>
          <MailIcon /> <div>почта</div> <div>{props.user.mail}</div>
          <WorkIcon /> <div>роль</div> <div>{userRoleString}</div>
        </ItemItems>
      </Item>
    </Link>
  );
}

type AdminUsersProps = {}

const pageLimit = 8;
export const AdminUsers: React.FC<AdminUsersProps> = (props) => {
  const [searchError, setSearchError] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch
  } = useInfiniteQuery<AxiosResponse<IApiResponse<GetAllUsersResponse>>>(
    ["practices"], (({ pageParam = 1 }) => {
      return GetAllUsers({ page: pageParam.toString(), search: searchRef.current?.value?.trim() ?? "", limit: pageLimit.toString() });
    }) as any,
    {
      getNextPageParam: (lastPage, pages) => {
        let total = lastPage.headers['x-total-count'];
        let page = pages.length + 1;

        if (page * pageLimit > total) return undefined;

        return page;
      }
    }
  );
  const loading = isFetching || isFetchingNextPage;

  const [instuctionOpen, setInstructionOpen] = React.useState(false);

  const users = data?.pages?.map(el => el.data.data).flat(1) ?? [];
  const cards = [];

  for (let i = 0; i < users.length; i++) {
    const currentUser = users[i];
    cards.push(<UserCard key={currentUser.id} user={currentUser} />);
  }

  const searchHandle = () => {
    if (loading) return;

    const search = searchRef.current?.value?.trim() ?? "";

    if (Boolean(search) == false) return setSearchError("поле пустое");
    if (search.length > 64) return setSearchError("максимум 64 символа");

    setSearchError("");
    refetch();
  }

  return (
    <AppLayout>
      <Container>
        <Typography className="fix" variant="h3">Пользователи</Typography>

        <Search onSubmit={(e: React.FormEvent) => {
          e.preventDefault();

          searchHandle();
        }}>
          <TextField
            inputRef={searchRef}
            fullWidth
            id="outlined-basic"
            label="ник или mail пользователя"
            variant="outlined"
            key="searchInput"
            error={Boolean(searchError)}
            helperText={searchError}
            disabled={loading}
          />

          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </Search>

        <ToolButtons>
          <IconButton color="primary" onClick={() => {
            if (searchRef.current) searchRef.current.value = "";

            setSearchError("");
            refetch();
          }}>
            <RefreshIcon />
          </IconButton>
          <IconButton title="инструкция" onClick={() => setInstructionOpen(true)}>
            <InfoIcon />
          </IconButton>
        </ToolButtons>
        <Divider />

        <Content>
          {cards}

          {isFetching == false && cards.length == 0 && <Typography variant="body1" color="primary">Пока ничего нет...</Typography>}
        </Content>

        {(isFetching || isFetchingNextPage) &&
          <Box mt={2} textAlign="center">
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

        {isFetching == false &&
          <Dialog onClose={() => setInstructionOpen(false)} aria-labelledby="customized-dialog-title" open={instuctionOpen}>
            <MuiDialogTitle id="customized-dialog-title">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                Инструкция <IconButton onClick={() => setInstructionOpen(false)}><CloseIcon /></IconButton>
              </Box>
            </MuiDialogTitle>
            <MuiDialogContent dividers>
              Список пользователей
            </MuiDialogContent>
          </Dialog>
        }
      </Container>
    </AppLayout>
  );
};