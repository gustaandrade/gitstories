import { Theme } from "../../themes/types";
import { Repository, Profile } from "../../types";

export interface HomeBodyProps {
  theme: Theme;
  profile: Profile;
  saveProfileSearch: (profile: Profile) => void;
  saveRepositoriesSearch: (repositories: Repository[]) => void;
}
