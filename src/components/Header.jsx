import React from "react";
import logo from "./logo.png";

export default function Header(props) {
  return (
    <div style={{display: props.display === "block" ? "block" : "none"}}>
      <div className="header">
      <div style={{display : props.alert}} id="alert" class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.theme === "light" ? "Light" : "Dark"} Mode</strong> Enabled on the  Website.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
        <div className="child">
          <h1 className="header-heading">
            In Crypto We Trust, But In Uranus, We Believe!
          </h1>
          <p className="header-paragraph">
            Uranus is the best Meme Token exist in the market which is a lot
            stable than others and a lot better futures aspects with a lot of
            potential
          </p>
        </div>
      </div>
      <div className="main-container">
        <img className="header-logo" src={logo} />
      </div>
    </div>
  );
}
