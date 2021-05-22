import React from 'react';
import { AppCardBody } from './styled';

type AppCardProps = {}

export const AppCard: React.FC<AppCardProps> = (props) => {
  return (
    <AppCardBody>
      {props.children}
    </AppCardBody>
  );
};