import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";
import Footer from "./Footer";
import "../Components/Components.css";

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
    <div id="fetchedGoals">
      <App />
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {"id: " + post._id} <br></br>
            {"Tavoite: " + post.title} <br></br> {"selite: " + post.content}
          </li>
        ))}
      </ul>
      <br></br>
      <Footer />
    </div>
  );
}

export default DataFetching;
