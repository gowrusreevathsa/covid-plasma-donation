import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";

class CardImageText extends Component {
  render() {
    return (
      <div className="col-12 col-md-4">
        <Card className="h-100 justify-content-center popShadow caseDetailsCard">
          <img
            width="100%"
            style={{ height: 100, width: 100, alignSelf: "center" }}
            src={this.props.src}
          />
          <CardBody>
            <CardTitle>
              <b>{this.props.heading}</b>
            </CardTitle>
            <CardSubtitle>{this.props.description}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardImageText;
