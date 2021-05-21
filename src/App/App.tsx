import React from 'react';
import { AppMain } from './AppMain';
import { Providers } from './Providers';

import "./style/global/main.scss";

function App() {
  return (
    <Providers>
      <AppMain />
    </Providers>
  );
}

export default App;