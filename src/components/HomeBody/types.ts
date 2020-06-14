import { Theme } from "../../themes/types";

export interface HomeBodyProps {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}
