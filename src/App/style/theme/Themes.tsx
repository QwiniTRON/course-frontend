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
  lightLayout
} from './ThemeColors';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    accentRed: Palette['primary'];
    accentBlack: Palette['primary'];
    accentWhite: Palette['primary'];
    accentBlue: Palette['primary'];
    accentPurple: Palette['primary'];
    accentPink: Palette['primary'];
    accentGreen: Palette['primary'];
    accentYellow: Palette['primary'];
    backgroundLight1: Palette['primary'];
    backgroundLight2: Palette['primary'];
    backgroundLight3: Palette['primary'];
    backgroundDark1: Palette['primary'];
    backgroundDark2: Palette['primary'];
    backgroundDark3: Palette['primary'];
    layout: Palette['primary'];
  }
  interface PaletteOptions {
    accentRed: PaletteOptions['primary'];
    accentBlack: PaletteOptions['primary'];
    accentWhite: PaletteOptions['primary'];
    accentBlue: PaletteOptions['primary'];
    accentPurple: PaletteOptions['primary'];
    accentPink: PaletteOptions['primary'];
    accentGreen: PaletteOptions['primary'];
    accentYellow: PaletteOptions['primary'];
    backgroundLight1: PaletteOptions['primary'];
    backgroundLight2: PaletteOptions['primary'];
    backgroundLight3: PaletteOptions['primary'];
    backgroundDark1: PaletteOptions['primary'];
    backgroundDark2: PaletteOptions['primary'];
    backgroundDark3: PaletteOptions['primary'];
    layout: PaletteOptions['primary'];
  }
}

export const LightThemeConfig = createMuiTheme({
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
    backgroundDark3
  },
});
export const DarkThemeConfig = createMuiTheme({
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
    backgroundDark3
  },
});


export const GlobalOverrideLight = createGlobalStyle`

`;
export const GlobalOverrideDark = createGlobalStyle`

`;
// --some-var-for-override: ${props.theme.some};