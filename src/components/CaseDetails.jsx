import React, { Component } from "react";

class CaseDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: "Worldwide",
      covidCases: 0,
      activeCases: 0,
      deaths: 0,
    };
  }

  render() {
    return (
      <fieldset>
        <legend>{this.props.region}</legend>
        {this.props.children}
        <span className="totalCovid">Total: {this.props.covidCases}</span>
        <br />
        <span className="totalCovid">Active: {this.props.activeCases}</span>
        <br />
        <span className="totalCovid">Deaths: {this.props.deaths}</span>
      </fieldset>
    );
  }
}

export default CaseDetails;
