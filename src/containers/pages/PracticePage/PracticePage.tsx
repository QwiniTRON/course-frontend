import React from 'react';
import { Box, Button, CircularProgress, Divider, TextField, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { Redirect, useParams } from 'react-router';
import { AppConsts, appFiles, appRoutes, RootState } from '../../../App';
import { AppLayout } from '../../../layouts';
import { IApiResponse, GetPracticeInfoResponse, GetPracticeInfo, RejectPractice, RejectPracticeRequest, ResolvePractice, ResolvePracticeRequest } from '../../../server';
import { Container, DeleteButton, Buttons, DownloadLink } from './styled';
import { MarkDown } from '../../../components';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

type PracticePageProps = {}

type PracticePageRouteParams = {
  id: string
}
type PracticePageInputs = {
  reason: string
}
const schema = Yup.object().shape({
  reason: Yup.string().trim().required("поле обязательно").min(24, "минимум 24 символа").max(256, "максимум 256 символов"),
});

export const PracticePage: React.FC<PracticePageProps> = (props) => {
  const history = useHistory();
  const params = useParams<PracticePageRouteParams>();
  const id = params.id;
  const { data, isError, error, isLoading } = useQuery<AxiosResponse<IApiResponse<GetPracticeInfoResponse>>>(
    [{ practiceId: id }] as any,
    (r: any) => GetPracticeInfo(r.queryKey[0]),
    {
      enabled: Boolean(id)
    }
  );
  const user = useSelector((state: RootState) => state.user.userData);


  const resolveReq = useMutation<any, any, ResolvePracticeRequest, any>(ResolvePractice as any);
  const rejectReq = useMutation<any, any, RejectPracticeRequest, any>(RejectPractice as any);
  const loading = isLoading || resolveReq.isLoading || rejectReq.isLoading;
  const practice = data?.data?.data;

  const { register, formState: { errors }, handleSubmit, getValues, watch, reset } = useForm<PracticePageInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const [openReject, setOpenReject] = React.useState(false);
  const [openResolve, setOpenResolve] = React.useState(false);

  const rejectHandle = (data: PracticePageInputs) => {
    rejectReq.mutateAsync({ description: data.reason, practiceId: id, teacherId: user?.id.toString()! })
      .then((result) => {
        history.push(appRoutes.Practices);
      });
  }

  const resolveHandle = () => {
    resolveReq.mutateAsync({ practiceId: id, teacherId: user?.id.toString()! })
      .then((result) => {
        history.push(appRoutes.Practices);
      });
  }


  if (Boolean(id) == false) return <Redirect to={appRoutes.Practices} />;

  if (practice && practice.isDone) return <Redirect to={appRoutes.Practices} />;


  return (
    <AppLayout>
      <Container>
        <Typography variant="h3">Проверка практики</Typography>

        {loading &&
          <Box mt={2}><CircularProgress /></Box>
        }

        {loading == false && practice &&
          <Box mt={2}>
            <Typography variant="h4">{practice?.lesson.name}</Typography>
            <Typography variant="body1">{practice?.lesson.description}</Typography>
            <Box mt={2} />

            <MarkDown md={practice?.lesson.content} />
          </Box>
        }

        {loading == false &&
          <Box mt={2}>
            <Divider />
            <DownloadLink href={appFiles(practice?.codePath!)} download><Button variant="contained" color="primary">скачать код</Button></DownloadLink>
            <Divider />
            <Buttons>
              <DeleteButton color="primary" variant="contained" onClick={() => setOpenReject(true)}>отказать</DeleteButton>
              <Button variant="contained" color="secondary" onClick={() => setOpenResolve(true)}>принять</Button>
            </Buttons>
          </Box>
        }

        {isLoading == false &&
          <Dialog onClose={() => setOpenReject(false)} aria-labelledby="customized-dialog-title" open={openReject}>
            <MuiDialogTitle id="customized-dialog-title">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                Отказ практики <IconButton onClick={() => setOpenReject(false)}><CloseIcon /></IconButton>
              </Box>
            </MuiDialogTitle>
            <MuiDialogContent dividers>
              <form onSubmit={handleSubmit(rejectHandle)} id="reasonform">
                Убедитесь что вы хорошо проверили работу ученика. Возможно он выполнил минимальные требования и может пройти этот урок.

                <Box mb={2} />
                <TextField
                  color="secondary"
                  fullWidth
                  id="outlined-basic"
                  label="причина"
                  variant="filled"
                  key="reasonInput"
                  disabled={loading}
                  error={Boolean(errors.reason?.message)}
                  helperText={errors.reason?.message}
                  {...register("reason")}
                />
                <Box mb={2} />
              </form>
            </MuiDialogContent>
            <MuiDialogActions>
              <DeleteButton
                disabled={resolveReq.isLoading}
                form="reasonform"
                type="submit"
                variant="contained"
                autoFocus
                onClick={() => { }} color="primary">
                {rejectReq.isLoading ? <CircularProgress /> : "отказать"}
              </DeleteButton>
            </MuiDialogActions>
          </Dialog>
        }

        {isLoading == false &&
          <Dialog onClose={() => setOpenResolve(false)} aria-labelledby="customized-dialog-title" open={openResolve}>
            <MuiDialogTitle id="customized-dialog-title">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                Принять практику <IconButton onClick={() => setOpenResolve(false)}><CloseIcon /></IconButton>
              </Box>
            </MuiDialogTitle>
            <MuiDialogContent dividers>
              Вы уверены что ученик выполнил всё требования?
            </MuiDialogContent>
            <MuiDialogActions>
              <Button disabled={resolveReq.isLoading} variant="contained" color="secondary" autoFocus onClick={() => {
                resolveHandle();
              }}>
                {resolveReq.isLoading ? <CircularProgress /> : "принять"}
              </Button>
            </MuiDialogActions>
          </Dialog>
        }


      </Container>
    </AppLayout>
  );
};