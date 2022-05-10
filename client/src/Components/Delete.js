import React, { Component } from "react";
import axios from "axios";
import App from "../App";
import "../Components/Delete.css";
import Footer from "./Footer";

class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
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
      .delete(`http://localhost:5000/api/delete/${this.state.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { _id } = this.state;

    return (
      <div>
        <App />
        <br></br>

        <br></br>
        <form id="deleteform" method="DELETE" onSubmit={this.submitHandler}>
          <h2>Poista tavoite:</h2>
          <br></br>
          <div>
            <label>
              Löydät tavoitteiden id:t "Kaikki tavoitteet" sivulta. Kirjoita
              poistettavan tavoitteen id:{" "}
            </label>
            <br></br>
            <input
              type="text"
              name="id"
              value={_id}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <button type="submit">Delete this goal</button>
        </form>
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default Delete;
