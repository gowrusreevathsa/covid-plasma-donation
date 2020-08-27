import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavigationBar from "./components/NavigationBar";
import TotalCovidCases from "./components/TotalCovidCases";
import CountryCovidCases from "./components/CountryCovidCases";
import SelectCountryCases from "./components/SelectCountryCases";
import HomeCards from "./components/HomeCards";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar />
    <div className="container">
      <div className="row">
        <TotalCovidCases />
        <CountryCovidCases />
        <SelectCountryCases />
      </div>
    </div>
    <br />
    <div className="container">
      <HomeCards />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
