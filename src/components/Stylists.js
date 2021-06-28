import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo-purple-shadow.png";
import Bio from "./Bio";
import "../App.css";
import "./Stylists.css";

/* profile pics */
import chris from "../assets/chris_cropped_2.jpg";
import marley from "../assets/marley.jpg"
import shelby from "../assets/shelby.jpg"
import profilepic from "../assets/test-profile.jpg";

/* moodboards */
import janessa1 from "../assets/summer_mens.PNG";
import hayley_board from "../assets/hayley3.png";
import shelby_board from "../assets/shelby-board-crop.jpeg";
import chris_board from "../assets/chris_cropped.png"

function Stylist() {
    return (
      <div className="app">
        <div className="logo-row">
          <Link to="/">
              <img className="logo" src={logo}/>
          </Link>
        </div>

        <hr className="bottom-line"/>
        <div className="back-section">
          <Link className="back-button" to="/" style={{ textDecoration: 'none' }}>
            ↜ Back to home
          </Link>
        </div>
        <div className="wrapper-stylist">

        <div className="profile">      
            <Bio 
              name="Chris" 
              style="Minimalism, Basic Wardrobe" 
              pic={chris} 
              description="University of Toronto, Comp. Sci"
              moodboard={chris_board}
              moodboard_link="https://www.pinterest.ca/chrisskwong7494/minimalist-mens-fashion/"
            />
            <div className="action-bar">
              {/* <a href="https://google.ca" target="blank"><i class="fab fa-instagram fa-3x"/></a> */}
              <a href="https://www.pinterest.ca/chrisskwong7494/minimalist-mens-fashion/" target="blank"><i class="fab fa-pinterest-square fa-3x"/></a>
              {/* <a href="https://google.ca" target="blank"><i class="fab fa-youtube-square fa-3x"/></a> */}
              <Link className="request" style={{ textDecoration: 'none' }}
                to={{pathname: "/request", state: {stylist: "Chris"}}}> 
                <div className="request-text">Request ➜</div>
              </Link>
            </div>
          </div>

          <div className="profile">  
            <Bio 
                name="Marley" 
                style="Asian, Korean" 
                pic={marley} 
                description="University of Waterloo, Elec. Eng"
                moodboard={chris_board}
            />    
            <div className="action-bar">
              <a href="https://google.ca" target="blank"><i class="fab fa-instagram fa-3x"/></a>
              <a href="https://google.ca" target="blank"><i class="fab fa-pinterest-square fa-3x"/></a>
              <a href="https://google.ca" target="blank"><i class="fab fa-youtube-square fa-3x"/></a>
              <Link className="request" style={{ textDecoration: 'none' }}
                to={{pathname: "/request", state: {stylist: "Marley"}}}> 
                <div className="request-text">Request ➜</div>
              </Link>
            </div>
          </div>

          <div className="profile">
            <Bio 
              name="Shelby" 
              style="Streetwear, Curated Vintage" 
              pic={shelby} 
              description="University of Toronto, Life Sci"
              moodboard={shelby_board}
              moodboard_link="https://www.pinterest.ca/Shelbyliu_/_saved/"
            />
            <div className="action-bar">
              <a href="https://www.instagram.com/shelby_liu/" target="blank"><i class="fab fa-instagram fa-3x"/></a>
              <a href="https://www.pinterest.ca/Shelbyliu_/_saved/" target="blank"><i class="fab fa-pinterest-square fa-3x"/></a>
              <a href="https://www.depop.com/shelby_liu/?shareButtonLink=true" target="blank"><i class="fas fa-external-link-square-alt fa-3x"/></a>
              <Link className="request" style={{ textDecoration: 'none' }}
                to={{pathname: "/request", state: {stylist: "Shelby"}}}> 
                <div className="request-text">Request ➜</div>
              </Link>
            </div>
          </div>
          
          <div className="profile">
          <Bio 
              name="Hayley" 
              style="Street Chic, Eclectic" 
              pic={profilepic} 
              description="Ryerson University, Fashion (MA)"
              moodboard={hayley_board}
              moodboard_link="https://www.pinterest.ca/hayleymeadus/2021-style/"
            />
            <div className="action-bar">
              <a href="https://www.instagram.com/hayleymeadus/" target="blank"><i class="fab fa-instagram fa-3x"/></a>
              <a href="https://www.pinterest.ca/hayleymeadus/2021-style/" target="blank"><i class="fab fa-pinterest-square fa-3x"/></a>
              <a href="https://hayleymeadus.com/" target="blank"><i class="fas fa-rss-square fa-3x"></i></a>
              <Link className="request" style={{ textDecoration: 'none' }}
                to={{pathname: "/request", state: {stylist: "Hayley"}}}> 
                <div className="request-text">Request ➜</div>
              </Link>
            </div>
          </div>
        </div>
        <hr className="bottom-line"/>
        <div className="back-section">
          <Link className="back-button" to="/" style={{ textDecoration: 'none' }}>
            ↜ Back to home
          </Link>
        </div>
        <div className="become-stylist">
          <strong>Want to become a stylist?</strong> Email us <a className="email" href="mailto:lookgoodr.style@gmail.com">here!</a>
        </div>
      </div>
    );
  }
  
  export default Stylist;