import React, { useEffect } from 'react';
import { useThemeConfig } from '../App/style/theme/UseThemeConfig';

type AppLayoutProps = {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const themeConfig = useThemeConfig();
  useEffect(() => {
    setTimeout(() => {
      themeConfig.toggleTheme();
    }, 1500);
  }, []);

  return (
    <div key="AppLayout">
      <header>header</header>
      <main>
        {children}
      </main>
    </div>
  );
};