import React, { Component } from "react";

class CaseDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <legend>{this.props.region}</legend>
        {this.props.children}
        <span className="totalCovid">Total: {this.props.covidCases}</span>
        <br /> {this.props.newCases}
        <br />
        <span className="totalCovid">Active: {this.props.activeCases}</span>
        <br />
        <span className="totalCovid">Deaths: {this.props.deaths}</span>
      </fieldset>
    );
  }
}

export default CaseDetails;
