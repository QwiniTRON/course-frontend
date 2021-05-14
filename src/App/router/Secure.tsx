import React, { ReactElement, ReactNode } from 'react';
import { Redirect } from 'react-router';
import { User, UserAuthView } from '../../models';
import { useUserData } from '../store/hooks/useUser';

type SecureProps = {
  redirectPath?: string
  politic?: (userData: UserAuthView) => boolean
}

// Если понадобится, то можно добавить асинхронные политики
export const Secure: React.FC<SecureProps> = (props) => {
  const userData: UserAuthView = useUserData();

  const accessStatus = props.politic ? props.politic(userData) : true;
  
  if (accessStatus === false && props.redirectPath) return <Redirect to={props.redirectPath} />;
  if (accessStatus === false) return null;

  return props.children as ReactElement;
};