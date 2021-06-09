import { Typography } from '@material-ui/core';
import React from 'react';
import { AppLayout } from '../../../layouts';
import { Container } from './styled';

type InstructionPageProps = {}

export const InstructionPage: React.FC<InstructionPageProps> = (props) => {
  return (
    <AppLayout>
      <Container>
        <Typography className="fix" variant="h3">Инструкция</Typography>
        <Typography variant="body1">
          В панели администратора есть доступ ко всем сущностям проекта.
        </Typography>
        <Typography variant="body1">
          Можно управлять пользователями, уроками, а также проверять практики пользователей.
        </Typography>
        <Typography variant="body1">
          Для доступа к выше перечисленным пунктам, необходимо пройти по соответствующим пунктам.
        </Typography>
      </Container>
    </AppLayout>
  );
};