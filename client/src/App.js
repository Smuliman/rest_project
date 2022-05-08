/* import "./App.css";
import Goals from "./Components/goals/goals";
import Navbar from "./Components/Navbar/navbar";
import Jumbo from "./Components/Jumbo/jumbotron";

import React, { useState, useEffect } from "react";
import DataFetching from "./Components/DataFetching";
import GetData from "./Components/GetData";

function App() {
  return (
    <div>
      <Jumbo />
      <Navbar />
      <Goals />
      <DataFetching />
    </div>
  );
}

export default App;
 */

import { Link } from "react-router-dom";
import Jumbo from "./Components/Jumbo/jumbotron";

function App() {
  return (
    <div>
      <Jumbo />
      <Link to="/">Etusivu </Link>
      <Link to="/getall">Tavoitteet </Link>
      <Link to="/getone">Hae tavoite </Link>
      <Link to="/add">Lisää tavoite </Link>
    </div>
  );
}
export default App;
