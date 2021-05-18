import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

type ServerQueryProviderProps = {}


const queryClient = new QueryClient();

export const ServerQueryProvider: React.FC<ServerQueryProviderProps> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};