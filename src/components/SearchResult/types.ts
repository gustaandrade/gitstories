import { Profile } from "../../types";

export interface SearchResultProps {
  profile: Profile | null;
  loading: boolean;

  loadProfileSearch: (user: string) => void;
  loadRepositoriesSearch: (user: string) => void;
  setLoading: () => void;
}
