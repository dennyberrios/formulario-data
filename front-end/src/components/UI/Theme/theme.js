import {
  coralRed,
  danger,
  darkDanger,
  deepTeal,
  emeraldTeal,
  onyxBlack,
  pureWhite,
  softAqua,
  warmSand,
} from "../Variavel";

export const theme = {
  colors: {
    primary: deepTeal,
    secondary: emeraldTeal,
    tertiary: softAqua,
    background: warmSand,
    text: onyxBlack,
    error: coralRed,
    white: pureWhite,
    danger: danger,
    darkDanger: darkDanger,
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
    wide: "1200px",
  },
};
