import React, { useRef, useState } from 'react';
import { Box, Button, CircularProgress, Dialog, Divider, IconButton, Tooltip, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router';
import { AddProgress, AddUserPracticeOrder, appRoutes, RootState } from '../../../App';
import { MarkDown } from '../../../components';
import { AppLayout } from '../../../layouts';
import { GetLesson, GetLessonResponse, IApiResponse } from '../../../server';
import { Container, Buttons } from './styled';
import SaveIcon from '@material-ui/icons/Save';
import { PhotoCamera } from '@material-ui/icons';
import ClearIcon from '@material-ui/icons/Clear';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';

type LessonPageProps = {}

type LessonPageRouteParams = {
  id: string
}

export const LessonPage: React.FC<LessonPageProps> = (props) => {
  const dispatch = useDispatch();
  const params = useParams<LessonPageRouteParams>();
  const history = useHistory();
  const id = params.id;

  const storeLoading = useSelector((state: RootState) => state.user.loading);
  const storeError = useSelector((state: RootState) => state.user.error);

  const [instuctionOpen, setInstructionOpen] = React.useState(false);

  const [codeError, setCodeError] = useState("");

  const [userCode, setUserCode] = useState<File | null>(null);
  const codeRef = useRef<HTMLInputElement>(null);

  const lessons = useSelector((state: RootState) => state.data.lessons);
  const user = useSelector((state: RootState) => state.user.userData);
  const userPractices = useSelector((state: RootState) => state.user.userData?.practiceOrders);
  const lastPractice = userPractices?.sort((l, r) => Date.parse(r.createdDate) - Date.parse(l.createdDate))[0];

  // lesson status
  let isOnProgress = false;
  if (lastPractice && (lastPractice.isDone == false)) isOnProgress = true;
  let hasDone = false;

  const { data, isError, error, isLoading } = useQuery<AxiosResponse<IApiResponse<GetLessonResponse>>>(
    [{ lessonId: id }] as any,
    (r: any) => GetLesson(r.queryKey[0]),
    {
      enabled: Boolean(id)
    }
  );
  const loading = isLoading || storeLoading;

  // lesson access check
  const lesson = data?.data?.data;
  lessons?.sort((l, r) => l.index - r.index);
  if (lesson) {
    let status = true;
    const prevLesson = lessons?.[lesson.index - 2];
    status = !Boolean(user?.userProgresses.some(p => p.lessonId == prevLesson?.id));
    hasDone = Boolean(user?.userProgresses.some(p => p.lessonId == lesson.id));

    if (lesson.index == 1) status = false;

    if (status) return <Redirect to={appRoutes.Lessons} />;
  }

  // id is not found
  if (Boolean(id) == false) {
    return <Redirect to={appRoutes.Lessons} />;
  }

  const addProgressHandle = () => {
    dispatch<any>(AddProgress({ userId: user?.id.toString()!, lessonId: lesson?.id.toString()! }))
      .then((result: any) => {
        history.push(appRoutes.Lessons);
      });
  }

  const addPracticeHandle = () => {
    if (Boolean(userCode) == false) return setCodeError("выбирите архив с готовым проектом");
    dispatch(AddUserPracticeOrder({ codeFile: userCode!, lessonId: lesson?.id.toString()!, userId: user?.id.toString()! }));
  }


  return (
    <AppLayout>
      <Container>
        <Typography color="error">{storeError}</Typography>

        {loading && <CircularProgress />}

        {loading == false &&
          <>
            <Typography variant="h3">{lesson?.name}</Typography>
            <Typography variant="body1">{lesson?.description}</Typography>

            <Box mt={1} pb={2}>
              <Divider />
              <IconButton title="инструкция" color="primary" onClick={() => setInstructionOpen(true)}>
                <InfoIcon />
              </IconButton>
              <Divider />
            </Box>

            <MarkDown md={lesson?.content!} />

            <Box mt={1} mb={1}>
              <Divider />
            </Box>
          </>
        }

        {loading == false && hasDone == false && Boolean(lesson?.isPractice) == false &&
          <Box mt={5}>
            <Tooltip title="завершить урок">
              <Button startIcon={<SaveIcon />} variant="outlined" color="primary" onClick={addProgressHandle}>завершить</Button>
            </Tooltip>
          </Box>
        }

        {loading == false && hasDone == false && lastPractice && lesson?.isPractice &&
          <div>
            <div>
              дата прохождения: {new Date(lastPractice.createdDate).toLocaleDateString('ru-RU')}
            </div>

            {isOnProgress &&
              <Typography color="primary">Работа ждёт проверки.</Typography>
            }

            {isOnProgress == false &&
              <Typography color="primary">причина отказа: {lastPractice.rejectReason}</Typography>
            }

            <Box mt={1} mb={1}>
              <Divider />
            </Box>
          </div>
        }

        {loading == false && hasDone == false && Boolean(lesson?.isPractice) && isOnProgress == false &&
          <form onSubmit={(e: React.FormEvent) => {
            e.preventDefault();

            addPracticeHandle();
          }}>
            <Typography color="error">{codeError}</Typography>
            <input
              accept=".zip,.rar,.7zip,.7z"
              key="codeInput"
              className="visually-hidden"
              id="usercode"
              type="file"
              ref={codeRef}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target?.files?.[0];

                if (Boolean(file) == false) return;

                setUserCode(file as File);
              }}
            />

            <Box mt={5}>
              <Buttons>
                <label htmlFor="usercode">
                  <Button
                    disabled={loading}
                    variant="contained"
                    color="secondary"
                    size="medium"
                    startIcon={<PhotoCamera />}
                    component="span"
                  >
                    {userCode ? "изменить" : "выбрать"}
                  </Button>
                </label>

                {userCode &&
                  <div>{userCode.name}</div>
                }

                {userCode &&
                  <IconButton disabled={loading} aria-label="clear avatar" key="clearAvatar" onClick={() => {
                    if (codeRef.current) {
                      codeRef.current.type = "text";
                      codeRef.current.type = "file";
                      setUserCode(null);
                    }
                  }}>
                    <ClearIcon />
                  </IconButton>
                }
              </Buttons>
            </Box>

            <Box mt={2} />
            <Button variant="outlined" color="primary" type="submit">Отправить</Button>
          </form>
        }

        {isLoading == false &&
          <Dialog onClose={() => setInstructionOpen(false)} aria-labelledby="customized-dialog-title" open={instuctionOpen}>
            <MuiDialogTitle id="customized-dialog-title">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                Инструкция <IconButton onClick={() => setInstructionOpen(false)}><CloseIcon /></IconButton>
              </Box>
            </MuiDialogTitle>
            <MuiDialogContent dividers>
              {lesson?.isPractice &&
                <p>Чтобы завершить урок вам нужно выполнить задание. Напишите ваше решение и упокуйте его в архив.
                  <br /> Понадобится время на проверку, подождите пока преподователи проверят работу.
                </p>
              }

              {lesson?.isPractice == false &&
                <p>Ознакомтесь с материалом урока и в конце нажмите завершить чтобы окончить урок.</p>
              }
            </MuiDialogContent>
          </Dialog>
        }
      </Container>
    </AppLayout>
  );
};