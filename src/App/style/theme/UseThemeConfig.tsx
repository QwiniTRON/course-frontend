import React, { useContext } from 'react';
import { AppThemeContext, ThemeContextProps } from './Global';

export function useThemeConfig(): ThemeContextProps {
  const themeConfig = useContext(AppThemeContext);

  return themeConfig;
}