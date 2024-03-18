import React, { Component } from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';
import darkMode from './moon.png';
import lightMode from './day-mode.png';

export default function Navbar(props) {
  return (
    <>
    <nav style={{backgroundColor: props.theme === "light" ? "#4d79ff" : "#00004d"}} className="navbar navbar-expand-lg" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="navbar-logo" src={logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.title}</a>
        </li>
      </ul>
      <div className="navbar-theme-logo">
      <label style={{color : "white"}}>Enable {props.theme === "light" ? "Dark" : "Light"} Mode</label><img onClick={props.toggleTheme} className="theme-logo" src={props.theme === "light" ? darkMode : lightMode}/>
      </div>
      <form className="d-flex" role="search">
        <input style={{backgroundColor: props.theme === "light" ? "#00004d" : "#4d79ff"}} className="form-control me-2" id="navbar-input" type="search" placeholder="Search" aria-label="Search"/>
        <button style={{backgroundColor: props.theme === "light" ? "#00004d" : "#4d79ff", color: props.theme === "light" ? "#4d79ff" : "#00004d"}} className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,//If defaultProps and props do not passed by the user then error will occur. Value should not be undefined.
  theme: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  theme: 'light'
}



