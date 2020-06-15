import { Theme } from "../../themes/types";
import { Repository, Profile } from "../../types";

export interface HomeBodyProps {
  theme: Theme;
  profile: Profile;
  repositories: Repository[];
  loading: boolean;

  loadProfileSearch: (user: string) => void;
  loadRepositoriesSearch: (user: string) => void;
  setLoading: () => void;
}
