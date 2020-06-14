import { Theme } from "./themes/types";

export interface AppProps {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export interface Profile {
  id: string;
  login: string;
  url: string;
  name: string;
  blog: string;
  location: string;
  email: string | null;
  bio: string;
  publicRepos: number;
  publicGists: number;
  followers: number;
  following: number;
  createdAt: string;
}

export interface Repository {
  id: string;
  owner: Profile;
  languages?: Language[];
  name: string;
  fullName: string;
  url: string;
  description: string;
  fork: boolean;
  mainLanguage: string;
  stargazers: number;
  watchers: number;
  forks: number;
  defaultBranch: string;
  createdAt: string;
  updatedAt: string;
}

export interface Language {
  id: string;
  name: string;
  percentage: number;
}
