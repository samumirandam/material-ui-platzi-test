import { urlFetch } from "../constants";

export const getGitHubUsers = async (user) => {
  const response = await fetch(`${urlFetch}${user}`, { method: "GET" });

  return response.json();
};
