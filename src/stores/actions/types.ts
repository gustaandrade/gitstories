import { Theme } from "../../themes/types";
import { Profile, Repository, Language } from "../../types";

export enum ActionTypes {
  CHANGE_THEME = "CHANGE_THEME",
  SAVE_PROFILE_SEARCH = "SAVE_PROFILE_SEARCH",
  SAVE_REPOSITORIES_SEARCH = "SAVE_REPOSITORIES_SEARCH",
  SAVE_LANGUAGES_SEARCH = "SAVE_LANGUAGES_SEARCH"
}

export interface ChangeThemeAction {
  type: ActionTypes.CHANGE_THEME;
  theme: Theme;
}

export interface SaveProfileSearchAction {
  type: ActionTypes.SAVE_PROFILE_SEARCH;
  profile: Profile;
}

export interface SaveRepositoriesSearchAction {
  type: ActionTypes.SAVE_REPOSITORIES_SEARCH;
  repositories: Repository[];
}

export interface SaveLanguagesSearchAction {
  type: ActionTypes.SAVE_LANGUAGES_SEARCH;
  languages: Language[];
}

export type StoreActions =
  | ChangeThemeAction
  | SaveProfileSearchAction
  | SaveRepositoriesSearchAction
  | SaveLanguagesSearchAction;
