import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { DarkThemeConfig, LightThemeConfig } from './Themes';


// overrides
const GlobalOverride = createGlobalStyle`

`;


export const ThemesEnum = {
  dark: "dark",
  light: "light"
};
const ThemeLocalstorageKey = "userTheme";


type StyleProviderProps = {

}

export type ThemeContextProps = {
  toggleTheme: () => string
}
export const AppThemeContext = React.createContext<ThemeContextProps>({ toggleTheme: () => "" });

export const StyleProvider: React.FC<StyleProviderProps> = function (props) {
  const [isDark, setIsDark] = useState(() => localStorage.getItem(ThemeLocalstorageKey) == ThemesEnum.dark);

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


  let theme = createMuiTheme(DarkThemeConfig);
  if (isDark === false) {
    theme = createMuiTheme(LightThemeConfig);
  }

  return (
    <AppThemeContext.Provider value={{ toggleTheme: toggleTheme }}>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalOverride />
          {props.children}
        </StyledThemeProvider>
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

// --some-var-for-override: ${props.theme.some};
