import React from 'react';
import { AppRoutes } from '.';
import { AppBounder, SplashScreen } from '../components';
import { Init } from './Init';

type AppMainProps = {}

export const AppMain: React.FC<AppMainProps> = (props) => {
  const isInit = Init();

  if(isInit == false) return <SplashScreen />
  
  return (
    <AppBounder>
      <AppRoutes />
    </AppBounder>
  );
};