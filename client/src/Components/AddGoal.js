import React, { Component } from "react";
import axios from "axios";
import App from "../App";
import qs from "qs";

class AddGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    /*   const data = qs.stringify({this.state}) */

    axios
      .post("http://localhost:5000/api/add", qs.stringify(this.state), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { title, content } = this.state;

    return (
      <div>
        <App />
        <form
          action="/urlencoded?title=title&content=tavoite"
          method="POST"
          encType="application/x-www-form-urlencoded"
          onSubmit={this.submitHandler}
        >
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="content"
              value={content}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddGoal;
