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
      <div className="header">
        <div className="child">
        <h1 className="header-heading">In Crypto We Trust, But In Uranus, We Believe!</h1>
        <p className="header-paragraph">Uranus is the best Meme Token exist in the market which is a lot stable than others and a lot better futures aspects with a lot of potential</p>
        </div>
      </div>
      <div className="main-container">
        <img className="header-logo" src={logo} />
      </div>
    </>
  );
}
