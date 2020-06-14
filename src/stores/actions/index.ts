import { Theme } from "../../themes/types";
import { ActionTypes, StoreActions } from "./types";

export const changeTheme = (theme: Theme): StoreActions => ({
  type: ActionTypes.CHANGE_THEME,
  theme
});
