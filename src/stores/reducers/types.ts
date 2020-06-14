import { Theme } from "../../themes/types";
import { Profile, Repository, Language } from "../../types";

export interface StoreState {
  theme: Theme;
  profile?: Profile;
  repositories?: Repository[];
  languages?: Language[];
}
