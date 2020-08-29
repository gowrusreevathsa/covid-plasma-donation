import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class NewsArticle extends Component {
  constructor(props) {
    super(props);

    this.visitArticle = this.visitArticle.bind(this);
  }

  visitArticle(e) {
    window.open(this.props.url, "_blank");
  }

  render() {
    return (
      <>
        <Card className="caseDetailsCard col-md-10 link margin-top-10">
          <CardBody onClick={this.visitArticle}>
            <CardTitle>
              <span className="font-weight-bold">{this.props.title}</span>
            </CardTitle>
            <CardSubtitle>
              <span>{this.props.description}</span>
            </CardSubtitle>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default NewsArticle;
