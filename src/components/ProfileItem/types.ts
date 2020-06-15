import { Theme } from "../../themes/types";

export interface ProfileItemProps {
  theme: Theme;
  profileItem: string | number | null;
  icon: JSX.Element;
  content: JSX.Element;
}
