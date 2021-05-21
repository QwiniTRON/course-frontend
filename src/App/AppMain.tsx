import React from 'react';
import { AppRoutes } from '.';
import { Init } from './Init';

type AppMainProps = {}

export const AppMain: React.FC<AppMainProps> = (props) => {
  const isInit = Init();

  if(isInit == false) return <h1>Грузим</h1>

  return (
    <AppRoutes />
  );
};