import React, { useState, useEffect } from "react";

function Repositories() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ValeriiaVovk/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <ul className="repositories">
      {repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.full_name}
          </a>
          {repo.description && <p>{repo.description}</p>}
        </li>
      ))}
    </ul>
  );
}

export default Repositories;
