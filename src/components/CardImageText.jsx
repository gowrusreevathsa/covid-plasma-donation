import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";

class CardImageText extends Component {
  render() {
    return (
      //   <div className="col">
      //     <img src={this.props.src} alt={this.props.alt} />
      //     <div className="cardContainer">
      //       <h3>
      //         <b>{this.props.heading}</b>
      //       </h3>
      //       <p>{this.props.description}</p>
      //     </div>
      //   </div>

      <div className="col-12 col-md-4">
        <Card className="h-100">
          <CardImg top width="100%" src={this.props.src} />
          <CardBody>
            <CardTitle>{this.props.heading}</CardTitle>
            <CardSubtitle>{this.props.description}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardImageText;
