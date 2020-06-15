import { Theme } from "../../themes/types";
import { ActionTypes, StoreActions } from "./types";
import { Profile, Repository, Language } from "../../types";

export const changeTheme = (theme: Theme): StoreActions => ({
  type: ActionTypes.CHANGE_THEME,
  theme
});

export const loadProfileSearch = (user: string): StoreActions => ({
  type: ActionTypes.LOAD_PROFILE_SEARCH,
  user
});

export const loadRepositoriesSearch = (user: string): StoreActions => ({
  type: ActionTypes.LOAD_REPOSITORIES_SEARCH,
  user
});

export const loadLanguagesSearch = (
  user: string,
  repo: string
): StoreActions => ({
  type: ActionTypes.LOAD_LANGUAGES_SEARCH,
  user,
  repo
});

export const saveProfileSearch = (profile: Profile): StoreActions => ({
  type: ActionTypes.SAVE_PROFILE_SEARCH,
  profile
});

export const saveRepositoriesSearch = (
  repositories: Repository[]
): StoreActions => ({
  type: ActionTypes.SAVE_REPOSITORIES_SEARCH,
  repositories
});

export const saveLanguagesSearch = (languages: Language[]): StoreActions => ({
  type: ActionTypes.SAVE_LANGUAGES_SEARCH,
  languages
});

export const setLoading = (): StoreActions => ({
  type: ActionTypes.SET_LOADING
});
