import { Theme } from "../../themes/types";

export interface ToggleProps {
  theme: Theme;
  changeTheme: () => void;
}
