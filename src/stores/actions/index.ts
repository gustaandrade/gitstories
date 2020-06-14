import { Theme } from "../../themes/types";
import { ActionTypes, StoreActions } from "./types";
import { Profile, Repository, Language } from "../../types";

export const changeTheme = (theme: Theme): StoreActions => ({
  type: ActionTypes.CHANGE_THEME,
  theme
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

export const saveLanguagesSearchAction = (
  languages: Language[]
): StoreActions => ({
  type: ActionTypes.SAVE_LANGUAGES_SEARCH,
  languages
});
