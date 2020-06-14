import { Theme } from "../../themes/types";

export interface HeaderProps {
  withLogo: boolean;
  theme: Theme;
  changeTheme: () => void;
}
