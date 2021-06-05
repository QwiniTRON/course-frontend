import React from 'react';
import { createMuiTheme } from "@material-ui/core";
import { createGlobalStyle } from 'styled-components';
import {
  accentRed,
  accentBlack,
  accentWhite,
  accentBlue,
  accentPurple,
  accentPink,
  accentGreen,
  accentYellow,
  backgroundLight1,
  backgroundLight2,
  backgroundLight3,
  backgroundDark1,
  backgroundDark2,
  backgroundDark3,
  darkLayout,
  lightLayout,
  AppThemeColor,
  LayoutColor,
  appColors
} from './ThemeColors';
import {DefaultTheme} from 'styled-components';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    accentRed: AppThemeColor;
    accentBlack: AppThemeColor;
    accentWhite: AppThemeColor;
    accentBlue: AppThemeColor;
    accentPurple: AppThemeColor;
    accentPink: AppThemeColor;
    accentGreen: AppThemeColor;
    accentYellow: AppThemeColor;
    backgroundLight1: AppThemeColor;
    backgroundLight2: AppThemeColor;
    backgroundLight3: AppThemeColor;
    backgroundDark1: AppThemeColor;
    backgroundDark2: AppThemeColor;
    backgroundDark3: AppThemeColor;
    layout: LayoutColor;
  }
  interface PaletteOptions {
    accentRed: AppThemeColor;
    accentBlack: AppThemeColor;
    accentWhite: AppThemeColor;
    accentBlue: AppThemeColor;
    accentPurple: AppThemeColor;
    accentPink: AppThemeColor;
    accentGreen: AppThemeColor;
    accentYellow: AppThemeColor;
    backgroundLight1: AppThemeColor;
    backgroundLight2: AppThemeColor;
    backgroundLight3: AppThemeColor;
    backgroundDark1: AppThemeColor;
    backgroundDark2: AppThemeColor;
    backgroundDark3: AppThemeColor;
    layout: LayoutColor;
  }
}

export const LightThemeConfig: DefaultTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: accentBlue.main,
    },
    secondary: {
      main: accentGreen.main,
    },
    layout: lightLayout,
    accentRed,
    accentBlack,
    accentWhite,
    accentBlue,
    accentPurple,
    accentPink,
    accentGreen,
    accentYellow,
    backgroundLight1,
    backgroundLight2,
    backgroundLight3,
    backgroundDark1,
    backgroundDark2,
    backgroundDark3,

    text: {
      primary: appColors.accentBlack
    }
  },
});
export const DarkThemeConfig: DefaultTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: accentBlue.main,
    },
    secondary: {
      main: accentGreen.main,
    },
    layout: darkLayout,
    accentRed,
    accentBlack,
    accentWhite,
    accentBlue,
    accentPurple,
    accentPink,
    accentGreen,
    accentYellow,
    backgroundLight1,
    backgroundLight2,
    backgroundLight3,
    backgroundDark1,
    backgroundDark2,
    backgroundDark3,

    text: {
      primary: appColors.backgroundDark1
    }
  },
});


export const GlobalOverrideLight = createGlobalStyle`

`;
export const GlobalOverrideDark = createGlobalStyle`

`;
export const CommonStyles = createGlobalStyle`
  img {
    max-width: 100%;
  }

  ${p => p.theme.breakpoints.down("xs")} {
    h3.fix {
      font-size: 24px;
    }
  }
`;
// --some-var-for-override: ${props.theme.some};