export interface Theme {
  name: string;
  background: string;
  foreground: string;
  icon: string;
  themeIcon: string;
  title: string;
  paragraph: string;
}

export enum ThemeEnum {
  LIGHT = "LIGHT",
  DARK = "DARK"
}
