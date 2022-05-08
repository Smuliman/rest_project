import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getall")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <App />
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {"Tavoite: " + post.title} {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
