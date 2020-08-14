import React from "react";
import CaseDetails from "../components/CaseDetails";
import "../shared/TotalCovid.css";

class TotalCovidCases extends React.Component {
  constructor() {
    super();
    this.state = {
      covidCases: 0,
      activeCases: 0,
      Deaths: 0,
    };
  }

  componentDidMount() {
    this.getTotalCases();

    this.timerID = setInterval(() => this.getTotalCases(), 15000);
  }

  getTotalCases() {
    let covidCases = 0;
    let activeCases = 0;
    let deaths = 0;
    fetch("https://covid-193.p.rapidapi.com/statistics?country=all", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "7462fc126bmsh61e1b04c8ef6952p1c3ffdjsn332eaa43c91d",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        covidCases = data.response["0"]["cases"]["total"];
        activeCases = data.response["0"]["cases"]["active"];
        deaths = data.response["0"]["deaths"]["total"];
      })
      .then(() => this.setState({ covidCases, activeCases, deaths }))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <CaseDetails
          region="Worldwide"
          covidCases={this.state.covidCases}
          activeCases={this.state.activeCases}
          deaths={this.state.deaths}
        />
      </div>
    );
  }
}

export default TotalCovidCases;
