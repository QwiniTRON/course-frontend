// import {} from '@material-ui/core/styles';
import { AppColor } from './utilities/Colors';


const appColors = {
  backgroundLight1: "#000e1e",
  backgroundLight2: "#041528",
  backgroundLight3: "#1d2c3d",

  accentRed: "#ed5564",
  accentBlack: "#212735",
  accentWhite: "#d8e3f9",
  accentBlue: "#4d7cff",
  accentPurple: "#ac92ed",
  accentPink: "#ec87bf",
  accentGreen: "#a0d468",
  accentYellow: "#ffc929",

  backgroundDark1: "#eff5ff",
  backgroundDark2: "#ffffff",
  backgroundDark3: "#e0e4e8"
}

export type AppColors = "primary" | "secondary" | "error" | "warning" | "info" | "success" | "background" | "layout" | "accentRed" | "accentBlack" | "accentWhite" | "accentBlue" | "accentPurple" | "accentPink" | "accentGreen" | "accentYellow" | "backgroundLight1" | "backgroundLight2" | "backgroundLight3" | "backgroundDark1" | "backgroundDark2" | "backgroundDark3";

export const accentRed = {
  main: appColors.accentRed,
  contrastText: AppColor.ContrastYiqToRgba(appColors.accentRed),
  dark: AppColor.ShadeLightColorToRgba(appColors.accentRed, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.accentRed, 30),
  gray: AppColor.GreyScaleToRgba(appColors.accentRed),
  negate: AppColor.From(appColors.accentRed).negate().toRgba(),
  weak: AppColor.From(appColors.accentRed).changeOpacity(-30).toRgba()
};
export const accentBlack = {
  main: appColors.accentBlack,
  contrastText: AppColor.ContrastYiqToRgba(appColors.accentBlack),
  dark: AppColor.ShadeLightColorToRgba(appColors.accentBlack, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.accentBlack, 30),
  gray: AppColor.GreyScaleToRgba(appColors.accentBlack),
  negate: AppColor.From(appColors.accentBlack).negate().toRgba(),
  weak: AppColor.From(appColors.accentBlack).changeOpacity(-30).toRgba()
};
export const accentWhite = {
  main: appColors.accentWhite,
  contrastText: AppColor.ContrastYiqToRgba(appColors.accentWhite),
  dark: AppColor.ShadeLightColorToRgba(appColors.accentWhite, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.accentWhite, 30),
  gray: AppColor.GreyScaleToRgba(appColors.accentWhite),
  negate: AppColor.From(appColors.accentWhite).negate().toRgba(),
  weak: AppColor.From(appColors.accentWhite).changeOpacity(-30).toRgba()
};
export const accentBlue = {
  main: appColors.accentBlue,
  contrastText: AppColor.ContrastYiqToRgba(appColors.accentBlue),
  dark: AppColor.ShadeLightColorToRgba(appColors.accentBlue, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.accentBlue, 30),
  gray: AppColor.GreyScaleToRgba(appColors.accentBlue),
  negate: AppColor.From(appColors.accentBlue).negate().toRgba(),
  weak: AppColor.From(appColors.accentBlue).changeOpacity(-30).toRgba()
};
export const accentPurple = {
  main: appColors.accentPurple,
  contrastText: AppColor.ContrastYiqToRgba(appColors.accentPurple),
  dark: AppColor.ShadeLightColorToRgba(appColors.accentPurple, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.accentPurple, 30),
  gray: AppColor.GreyScaleToRgba(appColors.accentPurple),
  negate: AppColor.From(appColors.accentPurple).negate().toRgba(),
  weak: AppColor.From(appColors.accentPurple).changeOpacity(-30).toRgba()
};
export const accentPink = {
  main: appColors.accentPink,
  contrastText: AppColor.ContrastYiqToRgba(appColors.accentPink),
  dark: AppColor.ShadeLightColorToRgba(appColors.accentPink, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.accentPink, 30),
  gray: AppColor.GreyScaleToRgba(appColors.accentPink),
  negate: AppColor.From(appColors.accentPink).negate().toRgba(),
  weak: AppColor.From(appColors.accentPink).changeOpacity(-30).toRgba()
};
export const accentGreen = {
  main: appColors.accentGreen,
  contrastText: AppColor.ContrastYiqToRgba(appColors.accentGreen),
  dark: AppColor.ShadeLightColorToRgba(appColors.accentGreen, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.accentGreen, 30),
  gray: AppColor.GreyScaleToRgba(appColors.accentGreen),
  negate: AppColor.From(appColors.accentGreen).negate().toRgba(),
  weak: AppColor.From(appColors.accentGreen).changeOpacity(-30).toRgba()
};
export const accentYellow = {
  main: appColors.accentYellow,
  contrastText: AppColor.ContrastYiqToRgba(appColors.accentYellow),
  dark: AppColor.ShadeLightColorToRgba(appColors.accentYellow, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.accentYellow, 30),
  gray: AppColor.GreyScaleToRgba(appColors.accentYellow),
  negate: AppColor.From(appColors.accentYellow).negate().toRgba(),
  weak: AppColor.From(appColors.accentYellow).changeOpacity(-30).toRgba()
};

export const backgroundLight1 = {
  main: appColors.backgroundLight1,
  contrastText: AppColor.ContrastYiqToRgba(appColors.backgroundLight1),
  dark: AppColor.ShadeLightColorToRgba(appColors.backgroundLight1, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.backgroundLight1, 30),
  gray: AppColor.GreyScaleToRgba(appColors.backgroundLight1),
  negate: AppColor.From(appColors.backgroundLight1).negate().toRgba(),
  weak: AppColor.From(appColors.backgroundLight1).changeOpacity(-30).toRgba()
};
export const backgroundLight2 = {
  main: appColors.backgroundLight2,
  contrastText: AppColor.ContrastYiqToRgba(appColors.backgroundLight2),
  dark: AppColor.ShadeLightColorToRgba(appColors.backgroundLight2, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.backgroundLight2, 30),
  gray: AppColor.GreyScaleToRgba(appColors.backgroundLight2),
  negate: AppColor.From(appColors.backgroundLight2).negate().toRgba(),
  weak: AppColor.From(appColors.backgroundLight2).changeOpacity(-30).toRgba()
};
export const backgroundLight3 = {
  main: appColors.backgroundLight3,
  contrastText: AppColor.ContrastYiqToRgba(appColors.backgroundLight3),
  dark: AppColor.ShadeLightColorToRgba(appColors.backgroundLight3, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.backgroundLight3, 30),
  gray: AppColor.GreyScaleToRgba(appColors.backgroundLight3),
  negate: AppColor.From(appColors.backgroundLight3).negate().toRgba(),
  weak: AppColor.From(appColors.backgroundLight3).changeOpacity(-30).toRgba()
};

export const backgroundDark1 = {
  main: appColors.backgroundDark1,
  contrastText: AppColor.ContrastYiqToRgba(appColors.backgroundDark1),
  dark: AppColor.ShadeLightColorToRgba(appColors.backgroundDark1, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.backgroundDark1, 30),
  gray: AppColor.GreyScaleToRgba(appColors.backgroundDark1),
  negate: AppColor.From(appColors.backgroundDark1).negate().toRgba(),
  weak: AppColor.From(appColors.backgroundDark1).changeOpacity(-30).toRgba()
};
export const backgroundDark2 = {
  main: appColors.backgroundDark2,
  contrastText: AppColor.ContrastYiqToRgba(appColors.backgroundDark2),
  dark: AppColor.ShadeLightColorToRgba(appColors.backgroundDark2, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.backgroundDark2, 30),
  gray: AppColor.GreyScaleToRgba(appColors.backgroundDark2),
  negate: AppColor.From(appColors.backgroundDark2).negate().toRgba(),
  weak: AppColor.From(appColors.backgroundDark2).changeOpacity(-30).toRgba()
};
export const backgroundDark3 = {
  main: appColors.backgroundDark3,
  contrastText: AppColor.ContrastYiqToRgba(appColors.backgroundDark3),
  dark: AppColor.ShadeLightColorToRgba(appColors.backgroundDark3, -30),
  light: AppColor.ShadeLightColorToRgba(appColors.backgroundDark3, 30),
  gray: AppColor.GreyScaleToRgba(appColors.backgroundDark3),
  negate: AppColor.From(appColors.backgroundDark3).negate().toRgba(),
  weak: AppColor.From(appColors.backgroundDark3).changeOpacity(-30).toRgba()
};

export const darkLayout = {
  main: appColors.backgroundLight1,
  dark: appColors.accentBlack,
  light: appColors.backgroundLight2,
  border: appColors.accentWhite,
  contrast: appColors.accentWhite,
  paper: appColors.backgroundLight2,
  text: appColors.backgroundDark1
}

export const lightLayout = {
  main: appColors.accentWhite,
  dark: appColors.accentWhite,
  light: appColors.backgroundDark1,
  border: appColors.accentWhite,
  contrast: appColors.accentBlack,
  paper: appColors.backgroundDark2,
  text: appColors.accentBlack
}