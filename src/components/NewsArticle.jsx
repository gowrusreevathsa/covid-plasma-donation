import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class NewsArticle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Card className="h-100 ">
          <CardBody>
            <CardTitle>
              <span className="font-weight-bold">{this.props.title}</span>
            </CardTitle>
            <CardSubtitle>
              <span>{this.props.description}</span>
              <span>{this.props.content}</span>
            </CardSubtitle>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default NewsArticle;
