import React, { useEffect } from 'react';
import { Providers } from './Providers';
import { AppRoutes } from './router';

import "./style/global/main.scss";

function App() {
  useEffect(() => {

  }, []);

  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
}

export default App;