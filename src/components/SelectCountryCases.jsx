import React, { Component } from "react";
import CaseDetails from "../components/CaseDetails";
import "../shared/TotalCovid.css";

class SelectCountryCases extends Component {
  constructor() {
    super();
    this.state = {
      country: "Afghanistan",
      covidCases: 0,
      activeCases: 0,
      deaths: 0,
      newCases: 0,
      countries: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getListOfCountries();
    this.getCountryCases(this.state.country);
  }

  handleChange(event) {
    this.setState({
      country: event.target.value,
    });
    this.getCountryCases(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

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
        activeCases = data.response["0"]["deaths"]["total"];
        newCases = data.response["0"]["cases"]["new"];
      })
      .then(() => this.setState({ covidCases, activeCases, deaths, newCases }))
      .catch((err) => {
        console.log(err);
      });
  }

  getListOfCountries() {
    let countries = [];
    fetch("https://covid-193.p.rapidapi.com/countries", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "7462fc126bmsh61e1b04c8ef6952p1c3ffdjsn332eaa43c91d",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let len = data.response.length;
        for (let i = 0; i < len; ++i) {
          countries.push(data.response[String(i)]);
        }
      })
      .then(() =>
        this.setState({
          countries,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const listCountries = this.state.countries.map((country) => (
      <option key={country} value={country}>
        {country}
      </option>
    ));

    return (
      <CaseDetails
        region="Select a country"
        covidCases={this.state.covidCases}
        activeCases={this.state.activeCases}
        deaths={this.state.deaths}
        newCases={this.state.newCases}
      >
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.country} onChange={this.handleChange}>
            {listCountries}
          </select>
        </form>
        <br />
      </CaseDetails>
    );
  }
}

export default SelectCountryCases;
