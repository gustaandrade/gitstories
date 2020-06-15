import { Theme } from "../../themes/types";
import { Profile, Repository, Language } from "../../types";

export enum ActionTypes {
  CHANGE_THEME = "CHANGE_THEME",
  LOAD_PROFILE_SEARCH = "LOAD_PROFILE_SEARCH",
  LOAD_REPOSITORIES_SEARCH = "LOAD_REPOSITORIES_SEARCH",
  LOAD_LANGUAGES_SEARCH = "LOAD_LANGUAGES_SEARCH",
  SAVE_PROFILE_SEARCH = "SAVE_PROFILE_SEARCH",
  SAVE_REPOSITORIES_SEARCH = "SAVE_REPOSITORIES_SEARCH",
  SAVE_LANGUAGES_SEARCH = "SAVE_LANGUAGES_SEARCH",
  SET_LOADING = "SET_LOADING"
}

export interface ChangeThemeAction {
  type: ActionTypes.CHANGE_THEME;
  theme: Theme;
}

export interface LoadProfileSearchAction {
  type: ActionTypes.LOAD_PROFILE_SEARCH;
  user: string;
}

export interface LoadRepositoriesSearchAction {
  type: ActionTypes.LOAD_REPOSITORIES_SEARCH;
  user: string;
}

export interface LoadLanguagesSearchAction {
  type: ActionTypes.LOAD_LANGUAGES_SEARCH;
  user: string;
  repo: string;
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

export interface SetLoadingAction {
  type: ActionTypes.SET_LOADING;
}

export type StoreActions =
  | ChangeThemeAction
  | LoadProfileSearchAction
  | LoadRepositoriesSearchAction
  | LoadLanguagesSearchAction
  | SaveProfileSearchAction
  | SaveRepositoriesSearchAction
  | SaveLanguagesSearchAction
  | SetLoadingAction;
