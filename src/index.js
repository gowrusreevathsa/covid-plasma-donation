import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavigationBar from "./components/NavigationBar";
import TotalCovidCases from "./components/TotalCovidCases";
import CountryCovidCases from "./components/CountryCovidCases";
import SelectCountryCases from "./components/SelectCountryCases";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar />
    <TotalCovidCases />
    <div>
      <CountryCovidCases />
    </div>
    <div>
      <SelectCountryCases />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
