import axios from "axios";

/**
 * Advanced GitHub user search
 * @param {string} username - username search term
 * @param {string} location - optional location filter
 * @param {number} minRepos - optional minimum repo count
 * @param {number} page - pagination page
 * @returns GitHub search API response
 */
export const searchUsersAdvanced = async (username, location, minRepos, page = 1) => {
  let query = username;

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=5&page=${page}`
  );

  return response.data; // contains { items, total_count }
};
