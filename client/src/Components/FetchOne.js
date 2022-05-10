import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";
import "../Components/FetchOne.css";
import Footer from "./Footer";

function FetchOne() {
  const [post, setPost] = useState({});
  const [_id, setId] = useState("kirjoita id");
  const [idFromButtonClick, setIdFromButtonClick] = useState("");
  const handleClick = () => {
    setIdFromButtonClick(_id);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <App />
      <br></br>
      <div id="typeId">
        <label>Kirjoita tavoitteen id: </label>
        <input
          type="text"
          value={_id}
          onChange={(e) => setId(e.target.value)}
        />

        <button type="button" onClick={handleClick}>
          Hae tavoite
        </button>
      </div>
      <div id="fetchedId">
        <p>
          {" "}
          {"Tavoite: " + post.title} <br></br> {"selite: " + post.content}
        </p>
      </div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {"Tavoite: " + post.title} {post.content}
          </li>
        ))}
      </ul> */}
      <br></br>
      <Footer />
    </div>
  );
}

export default FetchOne;
