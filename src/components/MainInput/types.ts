import { Theme } from "../../themes/types";
import { Repository, Profile } from "../../types";

export interface MainInputProps {
  theme: Theme;
  profile: Profile | null;
  repositories: Repository[];
  loading: boolean;

  loadProfileSearch: (user: string) => void;
  loadRepositoriesSearch: (user: string) => void;
  setLoading: () => void;
}
