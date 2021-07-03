import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-purple-shadow.png";
import shopping from "../assets/undraw_shopping_light.svg";
import Collapsible from "./Collapsible";
import "../App.css";
import "./Home.css";

function Home() {
    return (
      <div className="app">
        <div className="logo-row">
          <Link to="/">
              <img className="logo" src={logo}/>
          </Link>
        </div>
        <div className="tagline">We'll help you dress better</div>
        <div className="tagline-2">Let our stylists give you the fashion advice you're looking for.</div> 

        <div className="start">
          <Link style={{ textDecoration: 'none' }} to="/stylists">
              <h2>Browse our stylists ➜</h2>
          </Link>
        </div>

        <img className="splash" src={shopping}/>

        <div className="tagline-howitworks">
          How it works
        </div>

        <div className="howitworks-container">
          <div className="grid-block">
            <div class="number">1</div>
            <h3>Browse our style experts</h3>
            <p>Explore moodboards and portfolio links to find the stylist that fits your look.</p>
          </div>
          <div className="grid-block">
            <div class="number">2</div>
            <h3>Pick your service</h3>
            <p>Choose the service that best fits your style needs - nothing more, nothing less.</p>
          </div>
          <div className="grid-block">
            <div class="number">3</div>
            <h3>They'll reach out</h3>
            <p>Once your information and payment are processed, your stylist will reach out.</p>
          </div>
        </div>
        
        <div className="start-hero">
          <h1>Start dressing better today with help from our stylists</h1>
          <div className="start">
            <Link style={{ textDecoration: 'none' }} to="/stylists">
                <h2>Get started now ➜</h2>
            </Link>
          </div>
        </div>
        
        <div className="tagline-service">
          Services
        </div>
        <div className="service-grid">
          <div className="service-grid-block">
            <h3>Mix and Match: $5 USD</h3>
            <p>Send some clothing choices to one of our stylists, and they'll pick the ones you should buy.</p>
          </div>
          <div className="service-grid-block">
            <h3>Select for Me: $10 USD</h3>
            <p>Tell one of our stylists what you're looking for from several brands, and they'll send you purchase links.</p>
          </div>
          <div className="service-grid-block">
            <h3>30-min 1:1 Call: $20 USD</h3>
            <p>Grab a half-hour call with a stylist to get personalised advice.</p>
          </div>
        </div>

        <div className="tagline-service">
          FAQ
        </div>
        <div className="faq-grid">
          <div className="faq-grid-block">
            <h3>What's the turnaround time?</h3>
            <p>Our stylists will reach out to you within 2 business days.</p>
          </div>
          <div className="faq-grid-block">
            <h3>How do I pay?</h3>
            <p>A stripe invoice will be emailed to you within 1 business day.</p>
          </div>
          <div className="faq-grid-block">
            <h3>How will I be contacted?</h3>
            <p>Your stylist will reach out by email. If you don't receive a confirmation email immediately after requesting a stylist, email us <a className="email" href="mailto:lookgoodr.style@gmail.com">here.</a></p>
          </div>
          <div className="faq-grid-block">
            <h3>Do you offer any other services?</h3>
            <p>Not right now, but feel free to bring it up with your stylist and we'll see what we can do!</p>
          </div>
          <div className="faq-grid-block">
            <h3>What if I'm not satisfied?</h3>
            <p>We want you to look your best. If you're not satisfied with advice given by our stylists, email us <a className="email" href="mailto:lookgoodr.style@gmail.com">here.</a></p>
          </div>
          <div className="faq-grid-block">
            <h3>How do I become a stylist?</h3>
            Email us <a className="email" href="mailto:lookgoodr.style@gmail.com">here!</a>
          </div>
          <div className="faq-grid-block">
            <h3>Who are you and what is this project?</h3>
            Read more about lookgoodr <a className="email" target="_blank" href="https://www.notion.so/About-lookgoodr-cef509c12d1f48a3ae37502180088575">here</a>, and follow our <a className="email" href="https://www.instagram.com/lookgoodr.style/" target="_blank"><i class="fab fa-instagram fa-lg"/></a> to stay updated on our journey!
          </div>
        </div>
        <hr className="bottom-line"/>
        <div className="footer">
          <div className="bottom-text">
            <strong>Have more questions?</strong> Email us <a className="email" href="mailto:lookgoodr.style@gmail.com">here!</a>  
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;