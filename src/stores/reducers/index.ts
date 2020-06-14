import { LightTheme } from "../../themes";

import { StoreState } from "./types";
import { StoreActions, ActionTypes } from "../actions/types";

export const initialState: StoreState = {
  theme: LightTheme
};

const Reducer = (state = initialState, action: StoreActions): StoreState => {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      };

    default:
      return state;
  }
};

export default Reducer;
