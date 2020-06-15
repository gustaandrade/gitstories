import { Profile, Repository } from "../types";

export const getProfileFromJson = (data: any): Profile => {
  let user: Profile = {
    id: data.id,
    login: data.login,
    url: data.html_url,
    name: data.name,
    avatar: data.avatar_url,
    blog: data.blog,
    location: data.location,
    email: data.email,
    bio: data.bio,
    publicRepos: data.public_repos,
    publicGists: data.public_gists,
    followers: data.followers,
    following: data.following,
    createdAt: data.created_at
  };

  return user;
};

export const getRepositoriesFromJson = (data: any): Repository[] => {
  const repos: Repository[] = [];

  data.forEach((dt: any) => {
    let repo: Repository = {
      id: dt.id,
      owner: getProfileFromJson(dt.owner),
      name: dt.name,
      fullName: dt.full_name,
      url: dt.html_url,
      description: dt.description,
      fork: dt.fork,
      mainLanguage: dt.language,
      stargazers: dt.stargazers_count,
      watchers: dt.watchers_count,
      forks: dt.forks_count,
      defaultBranch: dt.default_branch,
      createdAt: dt.created_at,
      updatedAt: dt.updated_at
    };

    repos.push(repo);
  });

  return repos;
};
