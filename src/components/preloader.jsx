import React from 'react'
import Preloader from './preloader.gif';

export default function preloader(props) {
  return (
    <div style={{display: props.display === "block" ? "none" : "block"}} class="container-fluid preloader-container">
      <img className="preloader" src={Preloader}/>
    </div>
  )
}
