import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { CommonStyles, DarkThemeConfig, GlobalOverrideDark, GlobalOverrideLight, LightThemeConfig } from './Themes';


export const ThemesEnum = {
  dark: "dark",
  light: "light"
};
const ThemeLocalstorageKey = "userTheme";


type StyleProviderProps = {}


export type ThemeContextProps = {
  toggleTheme: () => string
  currentTheme: string
}
export const AppThemeContext = React.createContext<ThemeContextProps>({ toggleTheme: () => "", currentTheme: "dark" });


export const StyleProvider: React.FC<StyleProviderProps> = function (props) {
  const [isDark, setIsDark] = useState(() => !Boolean(localStorage.getItem(ThemeLocalstorageKey) == ThemesEnum.light));

  useEffect(() => {
    const savedTheme = localStorage.getItem(ThemeLocalstorageKey);
    const systemPrefer = window.matchMedia("(prefers-color-scheme: dark)");

    let currentTheme = systemPrefer.matches ? ThemesEnum.dark : ThemesEnum.light;
    if (savedTheme) currentTheme = savedTheme;

    if (currentTheme == ThemesEnum.light) setIsDark(false);

    window.document.documentElement.dataset.theme = currentTheme;
  }, []);

  const toggleTheme = () => {
    const newCurrentTheme = isDark ? ThemesEnum.light : ThemesEnum.dark;
    window.document.documentElement.dataset.theme = newCurrentTheme;

    localStorage.setItem(ThemeLocalstorageKey, newCurrentTheme);
    setIsDark(!isDark);
    return newCurrentTheme;
  }

  let theme = DarkThemeConfig;
  if (isDark === false) {
    theme = LightThemeConfig;
  }
  // console.log(theme);

  let Override = GlobalOverrideDark;
  if (isDark === false) Override = GlobalOverrideLight;

  return (
    <AppThemeContext.Provider value={{ toggleTheme: toggleTheme, currentTheme: isDark ? ThemesEnum.dark : ThemesEnum.light }}>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CommonStyles />
          <Override />
          {props.children}
        </StyledThemeProvider>
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}