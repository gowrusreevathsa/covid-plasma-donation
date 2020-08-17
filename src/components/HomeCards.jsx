import React, { Component } from "react";
import CardImageText from "./CardImageText";
import coronaVirusClip from "../assets/coronaVirusClip.png";
import strongClip from "../assets/strongClip.jpg";
import age from "../assets/age.jpg";

class HomeCards extends Component {
  render() {
    return (
      <div className="row">
        <CardImageText
          heading="Recovered from COVID-19"
          description="Previously diagnoised with COVID-19, but are now symptom free."
          src={coronaVirusClip}
        />
        <CardImageText
          heading="Healthy"
          description="You feel well and are in good health. Take professional advice if you're being treated for a chronic condition."
          src={strongClip}
        />
        <CardImageText
          heading="Adult (Children with additonal requirements)"
          description="You are at least 18 years old and weigh a minimum of 50Kgs. Younger donors have additional weight requirements."
          src={age}
        />
      </div>
    );
  }
}

export default HomeCards;
