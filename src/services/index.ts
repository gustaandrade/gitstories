const API_URL = "https://api.github.com";

const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

const fetchOptions: RequestInit = {
  method: "GET",
  headers: {
    Authorization: ACCESS_TOKEN!
  },
  mode: "cors",
  cache: "default"
};

export const GithubProfileApi = async (user: string) => {
  const response = await fetch(`${API_URL}/users/${user}`, fetchOptions);
  const json = await response.json();
  return json;
};

export const GithubReposApi = async (user: string) => {
  const response = await fetch(`${API_URL}/users/${user}/repos`, fetchOptions);
  const json = await response.json();
  return json;
};

export const GithubLanguagesApi = async (user: string, repo: string) => {
  const response = await fetch(
    `${API_URL}/repos/${user}/${repo}/languages`,
    fetchOptions
  );
  const json = await response.json();
  return json;
};
