import React from 'react';
import { AppCardBody } from './styled';

type AppCardProps = {
  className?: string
}

export const AppCard: React.FC<AppCardProps> = (props) => {
  return (
    <AppCardBody className={props.className}>
      {props.children}
    </AppCardBody>
  );
};