import React, { useState } from "react";
import { searchUsersAdvanced } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setPage(1);

    try {
      const data = await searchUsersAdvanced(username, location, minRepos, 1);
      setUsers(data.items || []);
      setHasMore(data.items.length > 0);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    try {
      const data = await searchUsersAdvanced(username, location, minRepos, nextPage);
      setUsers((prev) => [...prev, ...data.items]);
      setHasMore(data.items.length > 0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>GitHub Advanced Search</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "0.5rem", marginTop: "1rem" }}
      >
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: "0.5rem" }}
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: "0.5rem" }}
        />
        <input
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          style={{ padding: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem", background: "#3b82f6", color: "white" }}>
          Search
        </button>
      </form>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>Looks like we cant find the user</p>}

      <div style={{ marginTop: "1rem" }}>
        {users.map((user) => (
          <div key={user.id} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.5rem", border: "1px solid #ccc", marginBottom: "0.5rem" }}>
            <img src={user.avatar_url} alt={user.login} style={{ width: "50px", borderRadius: "50%" }} />
            <div>
              <p style={{ fontWeight: "bold" }}>{user.login}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={loadMore}
          style={{ marginTop: "1rem", padding: "0.5rem", width: "100%", background: "#16a34a", color: "white" }}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
