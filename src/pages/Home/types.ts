import { Theme } from "../../themes/types";

export interface HomeProps {
  theme: Theme;
  changeTheme: () => void;
}
