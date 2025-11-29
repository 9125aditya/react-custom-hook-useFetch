// src/components/FetchDemo.jsx
import React from "react";
import useFetch from "../hooks/useFetch";
import "./fetchDemo.css";

const FetchDemo = () => {
  // change URL to test different endpoints
  const { data, loading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <section className="fetch-container">
      <h2 className="fetch-heading">Users (useFetch hook)</h2>

      {loading && <p className="fetch-loading">Loading…</p>}

      {error && (
        <div className="fetch-error">
          <p>Error: {error}</p>
          <button onClick={refetch} className="fetch-btn">
            Retry
          </button>
        </div>
      )}

      <div className="fetch-grid">
        {Array.isArray(data) &&
          data.map((user) => (
            <div key={user.id} className="fetch-card">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>City: {user.address?.city}</p>
            </div>
          ))}

        {/* If API returns an object, show JSON */}
        {data && !Array.isArray(data) && !loading && !error && (
          <pre className="fetch-json">{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </section>
  );
};

export default FetchDemo;
