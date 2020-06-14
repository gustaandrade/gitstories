import { Theme } from "./themes/types";

export interface AppProps {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export interface Profile {
  login: string;
  url: string;
  name: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  publicRepos: number;
  publicGists: number;
  followers: number;
  following: number;
  createdAt: string;
}

export interface Repository {
  owner: Profile;
}
