import React from "react";
import "../shared/NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <a>Home</a>
      <a>About</a>
      <a>Health Info</a>
      <a>Can you donate plasma?</a>
    </div>
  );
};

export default NavigationBar;
