type HexColor = `#${string}`;

export const primaryColor: HexColor = "#042656";
export const secondaryColor: HexColor = "#F39C12";
export const tertiaryColor: HexColor = "#E6E9EE";
export const successColor: HexColor = "#34C759";
export const warningColor: HexColor = "#B37300";

export type ThemeColorKey =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning";

export type ThemeColor = {
  [K in ThemeColorKey]: HexColor;
};

export const themeColor: ThemeColor = {
  primary: primaryColor,
  secondary: secondaryColor,
  tertiary: tertiaryColor,
  success: successColor,
  warning: warningColor,
} as const;
