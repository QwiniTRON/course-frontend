import { Typography } from '@material-ui/core';
import React from 'react';
import { ThemeToggler } from '../../../components';
import { AppLayout } from '../../../layouts';
import { SettingsContainer } from './styled';

type SettingsPageProps = {}

export const SettingsPage: React.FC<SettingsPageProps> = (props) => {
  return (
    <AppLayout>
      <SettingsContainer>
        <div key="toggler">
          <Typography variant="body1">
            Тема
          </Typography>
          <ThemeToggler />
        </div>
      </SettingsContainer>
    </AppLayout>
  );
};