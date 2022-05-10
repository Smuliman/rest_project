import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataFetching from "./Components/DataFetching";
import FetchOne from "./Components/FetchOne";
import AddGoal from "./Components/AddGoal";
import Footer from "./Components/Footer";
import Delete from "./Components/Delete";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <App />
              <div class="container">
                <div class="row">
                  <div class="col-*-*"></div>
                  <div class="col-*-*">
                    {" "}
                    <p>
                      Appissa voit lisätä elämääsi tavoitteita, seurata
                      tavoitelistan kehitystä, valita yhden tavoitteen
                      tarkasteletavaksi tai poistaa yhden tavoitteen.
                    </p>
                  </div>
                  <div class="col-*-*"></div>
                </div>
              </div>
              <br></br>
              <Footer />
            </div>
          }
        />
        <Route path="/getall" element={<DataFetching />} />
        <Route path="/getone" element={<FetchOne />} />
        <Route path="/add" element={<AddGoal />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="*" element={<p>There is nothing here, sorry</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
