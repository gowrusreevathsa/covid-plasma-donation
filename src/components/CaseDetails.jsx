import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class CaseDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //   <fieldset className="col-sm-4">
      //     <legend>{this.props.region}</legend>
      //     {this.props.children}
      //     <span className="totalCovid">Total: {this.props.covidCases}</span>
      //     <br /> {this.props.newCases}
      //     <br />
      //     <span className="totalCovid">Active: {this.props.activeCases}</span>
      //     <br />
      //     <span className="totalCovid">Deaths: {this.props.deaths}</span>
      //   </fieldset>

      <div className="col-12 col-md-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle>{this.props.region}</CardTitle>
            <CardSubtitle>
              Total: {this.props.covidCases} <br />
              Active: {this.props.activeCases} <br />
              Deaths: {this.props.deaths}
              {this.props.children}
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CaseDetails;
