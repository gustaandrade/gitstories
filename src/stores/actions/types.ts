import { Theme } from "../../themes/types";

export enum ActionTypes {
  CHANGE_THEME = "CHANGE_THEME"
}

export interface ChangeThemeAction {
  type: ActionTypes.CHANGE_THEME;
  theme: Theme;
}

export type StoreActions = ChangeThemeAction;
