import React, { useEffect } from 'react';
import { useThemeConfig } from '../App/style/theme/UseThemeConfig';

type AppLayoutProps = {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div key="AppLayout">
      <header>header</header>
      <main>
        {children}
      </main>
    </div>
  );
};