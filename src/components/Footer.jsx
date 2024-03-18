import React, { Component } from 'react'
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import whatsapp from './whatsapp.png';
import twitter from './twitter.png';
import facebook from './facebook.png';

export default function Footer(props) {

  
    const color = props.theme === "light" ? "black" : "white";

    return (
      <>
      <div className="footer" style={{backgroundColor: props.theme === 'light' ? '#f0f0f5' : '#000033'}}>
        <li className="row">
            <div className="col left-list" style={{borderRight : props.theme === "light" ? "black solid 1px" : "grey solid 1px", borderBottom : props.theme === "light" ? "black solid 1px" : "grey solid 1px"}}>
            <p style={{color: props.theme === 'light' ? 'black' : 'white'}}>Partners</p>
                <ul>
                    <li><a style={{color}} href="https://dia.wiki/">Decentralized Intelligence Agency</a></li>
                    <li><a style={{color}} href="https://worldvibeweb.org/">World Vide Web</a></li>
                    <li><a style={{color}} href="https://purplerock.xyz/">Purplerock</a></li>
                </ul>
            </div>
            <div className="col right-list" style={{borderBottom : props.theme === "light" ? "black solid 1px" : "grey solid 1px"}}>
            <p style={{color: props.theme === 'light' ? 'black' : 'white'}}>Resources</p>
                <ul>
                    <li><a style={{color}} href="https://persistventure.notion.site/7291c569928947758d04c7dc99a3a327?pvs=25">Effective Vibes</a></li>
                    <li><a style={{color}} href="https://goldenmeme.org/">Golden Meme</a></li>
                </ul>
            </div>

            </li>
        <div className="social-media">
                <p style={{color: props.theme === 'light' ? 'black' : 'white'}}>Social Media</p>
                <ul>
                    <li><a style={{color}} href="#"><img className="social-media-icon" src={instagram}/></a></li>
                    <li><a style={{color}} href="#"><img className="social-media-icon" src={linkedin}/></a></li>
                    <li><a style={{color}} href="#"><img className="social-media-icon" src={whatsapp}/></a></li>
                    <li><a style={{color}} href="#"><img className="social-media-icon" src={twitter}/></a></li>
                    <li><a style={{color}} href="#"><img className="social-media-icon" src={facebook}/></a></li>
                </ul>
            </div>
            </div>
      </>
    )
  }
