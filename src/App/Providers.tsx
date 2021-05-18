import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './store/StoreProvider';
import { StyleProvider } from './style';
import { ServerQueryProvider } from './server';

type ProvidersProps = {}

export const Providers: React.FC<ProvidersProps> = (props) => {
  return (
    <ServerQueryProvider>
      <StyleProvider>
        <StoreProvider>
          <BrowserRouter>
            {props.children}
          </BrowserRouter>
        </StoreProvider>
      </StyleProvider>
    </ServerQueryProvider>
  );
};