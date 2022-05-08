import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";

function FetchOne() {
  const [post, setPost] = useState({});
  const [_id, setId] = useState("626ed325948a278f7a448cc2");
  const [idFromButtonClick, setIdFromButtonClick] = useState(
    "626ed325948a278f7a448cc2"
  );
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
      <input type="text" value={_id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch goal
      </button>
      <div>
        {"Tavoite: " + post.title} {post.content}
      </div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {"Tavoite: " + post.title} {post.content}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default FetchOne;
