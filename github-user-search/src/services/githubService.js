import axios from "axios";

// Single-user fetch (for ALX checker)
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced search function
export const searchUsersAdvanced = async (username, location, minRepos, page = 1) => {
  let query = username;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;
  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=5&page=${page}`
  );
  return response.data; // contains { items, total_count }
};
