import { Theme } from "../../themes/types";
import { Profile, Repository } from "../../types";

export interface ProfileProps {
  theme: Theme;
  profile: Profile;
  repositories: Repository[];
  loading: boolean;

  loadProfileSearch: (user: string) => void;
  loadRepositoriesSearch: (user: string) => void;
  setLoading: () => void;
}
