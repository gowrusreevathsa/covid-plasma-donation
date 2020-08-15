import React from "react";
import CaseDetails from "../components/CaseDetails";
import "../shared/TotalCovid.css";

class CountryCovidCases extends React.Component {
  constructor() {
    super();
    this.state = {
      covidCases: 0,
      activeCases: 0,
      Deaths: 0,
      newCases: 0,
      country: "all",
    };
  }

  componentDidMount() {
    Promise.all([this.getUserCountry()]).then((country) => {
      console.log("Inside promise ", country["0"]);
      this.getCountryCases(country["0"]);
      this.setState({ country: country["0"] });
    });

    this.timerID = setInterval(
      () => this.getCountryCases(this.state.country),
      300000 //API refreshes every 15 mins, let's keep it 5 mins
    );
  }

  //IP lookup to get user's country
  getUserCountry() {
    console.log("Inside getUserCountry");
    let country = "all";
    return fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => (country = response.country))
      .catch((data, status) => {
        console.log("Request failed");
      });
  }

  //Number of cases in the country
  getCountryCases(country) {
    console.log("Inside getCountryCases ", String(country));
    let covidCases = 0;
    let activeCases = 0;
    let deaths = 0;
    let newCases = 0;
    return fetch(
      "https://covid-193.p.rapidapi.com/statistics?country=" + String(country),
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key":
            "7462fc126bmsh61e1b04c8ef6952p1c3ffdjsn332eaa43c91d",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        covidCases = data.response["0"]["cases"]["total"];
        activeCases = data.response["0"]["cases"]["active"];
        deaths = data.response["0"]["deaths"]["total"];
        newCases = data.response["0"]["cases"]["new"];
      })
      .then(() => this.setState({ covidCases, activeCases, deaths, newCases }))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <CaseDetails
        region={this.state.country}
        covidCases={this.state.covidCases}
        activeCases={this.state.activeCases}
        deaths={this.state.deaths}
        newCases={this.state.newCases}
      />
    );
  }
}

export default CountryCovidCases;
