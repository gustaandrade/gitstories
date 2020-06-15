import { Theme } from "../../themes/types";
import { Profile, Repository, Language } from "../../types";

export interface StoreState {
  theme: Theme;
  profile: Profile | null;
  repositories: Repository[];
  languages: Language[];
  loading: boolean;
}
