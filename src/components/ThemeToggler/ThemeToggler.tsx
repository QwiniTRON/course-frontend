import { Switch } from '@material-ui/core';
import React from 'react';
import { ThemesEnum } from '../../App';
import { useThemeConfig } from '../../App/style/theme/UseThemeConfig';

type ThemeTogglerProps = {}

export const ThemeToggler: React.FC<ThemeTogglerProps> = (props) => {
  const themeConfiguration = useThemeConfig();

  return (
    <Switch
      checked={themeConfiguration.currentTheme == ThemesEnum.dark}
      onChange={() => themeConfiguration.toggleTheme()}
      name="theme"
      color="primary"
    />
  );
};