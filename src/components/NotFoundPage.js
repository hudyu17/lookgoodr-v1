import React, { useState, useEffect } from "react";
import { useLocation, Redirect, Link } from "react-router-dom";
import "../App.css";
import "./Confirm.css"
import logo from "../assets/logo-purple-shadow.png";
import error from "../assets/undraw_404.svg";

const NotFoundPage = () => {
  return (
    <div className="app">
          <div className="logo-row">
          <Link to="/">
              <img className="logo" src={logo}/>
          </Link>
          </div>
          <div className="wrapper-confirm">
              <img className="splash-confirm" src={error}/>
              <div className="tagline-confirm">Sorry!</div>
              {/* <div className="text-confirm">Sorry!</div> */}
              <div className="text-confirm">We can't find the page that you're looking for.</div>
              <div className="start">
                  <Link className="back-button-404" to="/" style={{ textDecoration: 'none' }}>
                      ↜ Back to home
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default NotFoundPage;