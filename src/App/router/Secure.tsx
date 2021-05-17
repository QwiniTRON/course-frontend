import React, { ReactElement, ReactNode } from 'react';
import { Redirect } from 'react-router';
import { User, UserAuthView } from '../../models';
import { useUserData } from '../store/hooks/useUser';

type SecureProps = {
  redirectPath?: string
  politic?: (userData: UserAuthView) => boolean

  substituteComponent?: React.ComponentType<any>
  substituteElement?: React.ReactNode
  // some: React.ReactElement
}

// Если понадобится, то можно добавить асинхронные политики
export const Secure: React.FC<SecureProps> = (props): React.ReactElement<any> | null => {
  const userData: UserAuthView = useUserData();
  
  const accessStatus = props.politic ? props.politic(userData) : true;
  
  if (accessStatus === false && props.redirectPath) return <Redirect to={props.redirectPath} />;
  if(accessStatus == false && props.substituteElement) return props.substituteElement as ReactElement;
  if(accessStatus == false && props.substituteComponent) {
    const ComponentToRender = props.substituteComponent;
    return React.createElement(ComponentToRender);
  };
  if (accessStatus === false) return null;

  return props.children as ReactElement;
};