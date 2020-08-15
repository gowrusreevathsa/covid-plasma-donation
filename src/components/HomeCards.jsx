import React, { Component } from "react";
import CardImageText from "./CardImageText";

class HomeCards extends Component {
  render() {
    return (
      <div className="row">
        <CardImageText heading="Test" description="Test Description" />
        <CardImageText heading="Test" description="Test Description" />
        <CardImageText heading="Test" description="Test Description" />
      </div>
    );
  }
}

export default HomeCards;
