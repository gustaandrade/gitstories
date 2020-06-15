import { LightTheme } from "../../themes";

import { StoreState } from "./types";
import { StoreActions, ActionTypes } from "../actions/types";

export const initialState: StoreState = {
  theme: LightTheme,
  profile: null,
  repositories: [],
  languages: [],
  loading: false
};

const Reducer = (state = initialState, action: StoreActions): StoreState => {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      };

    case ActionTypes.SAVE_PROFILE_SEARCH:
      return {
        ...state,
        profile: action.profile
      };

    case ActionTypes.SAVE_REPOSITORIES_SEARCH:
      return {
        ...state,
        repositories: action.repositories,
        loading: false
      };

    case ActionTypes.SAVE_LANGUAGES_SEARCH:
      return {
        ...state,
        languages: action.languages
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default Reducer;
