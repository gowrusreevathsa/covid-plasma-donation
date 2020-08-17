import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class CaseDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-12 col-md-4 mt-5">
        <Card className="h-100 caseDetailsCard">
          <CardBody>
            <CardTitle>
              <span className="font-weight-bold">
                {this.props.region}
                <span style={{ fontSize: "12" }}>{this.props.children}</span>
              </span>
            </CardTitle>
            <CardSubtitle>
              <span className="caseDetails">
                Total: {this.props.covidCases} (
                <span>{this.props.newCases}</span>) <br />
                Active: {this.props.activeCases} <br />
                Deaths: {this.props.deaths}
              </span>
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CaseDetails;
