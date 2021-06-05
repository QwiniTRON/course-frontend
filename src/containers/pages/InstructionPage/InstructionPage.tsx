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
          Из это панели можно управлять проектом.
        </Typography>
      </Container>
    </AppLayout>
  );
};