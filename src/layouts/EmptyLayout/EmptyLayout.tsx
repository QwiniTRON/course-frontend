import React from 'react';
import {Main} from './styled';

type EmptyLayoutProps = {}

export const EmptyLayout: React.FC<EmptyLayoutProps> = (props) => {
  return (
    <Main>
      {props.children}
    </Main>
  );
};