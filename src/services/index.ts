const API_URL = "https://api.github.com";

export const GithubProfileApi = async (user: string) => {
  const response = await fetch(`${API_URL}/users/${user}`);
  const json = await response.json();
  return json;
};

export const GithubReposApi = async (user: string) => {
  const response = await fetch(`${API_URL}/users/${user}/repos`);
  const json = await response.json();
  return json;
};

export const GithubLanguagesApi = async (user: string, repo: string) => {
  const response = await fetch(`${API_URL}/repos/${user}/${repo}/languages`);
  const json = await response.json();
  return json;
};
