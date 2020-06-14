import { Theme } from "../../themes/types";

export interface HeaderProps {
  withTitle: boolean;
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}
