import React from "react";
import logo from "./logo.png";
import containerImage from "./containerImage.jpeg";

export default function Header() {
  return (
    <>
      <div
        id="crypto-widget-CoinMarquee"
        data-transparent="true"
        data-design="classic"
        data-coin-ids="20371,1,166,136,382,1986,20,1120,440,29"
      ></div>
      <img className="header-image" src={containerImage} />
      <div className="main-container">
        <img className="header-logo" src={logo} />
      </div>
    </>
  );
}
