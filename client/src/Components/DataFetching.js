import React, { useState, useEffect } from "react";
import axios from "axios";

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
