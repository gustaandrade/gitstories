import { Theme } from "./themes/types";

export interface RouterProps {
  theme: Theme;
  changeTheme: () => void;
}
