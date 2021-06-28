import React, { useState, useEffect } from "react";
import { useLocation, Redirect, Link } from "react-router-dom";
import "../App.css";
import "./Confirm.css"
import logo from "../assets/logo-purple-shadow.png";
import confirm from "../assets/undraw_confirm_hand.svg";

const Confirm = () => {
    const location = useLocation()

    if (!location.state) {
        return (<Redirect to="/404" />)
    }

    const { email } = location.state

    return (
        <div className="app">
            <div className="logo-row">
            <Link to="/">
                <img className="logo" src={logo}/>
            </Link>
            </div>
            <div className="wrapper-confirm">
                <img className="splash-confirm" src={confirm}/>
                <div className="tagline-confirm">Thank you!</div>
                <div className="text-confirm">A confirmation has been sent to {email}.</div>
                <div className="text-confirm">If you haven't received it, email us <a className="email-confirm" href="mailto:lookgoodr.style@gmail.com">here.</a></div>
                <div className="social-confirm">
                    Let's stay in touch!
                    <div className="social-confirm-icons">
                        <a href="https://google.ca" target="blank"><i class="fab fa-instagram fa-lg"/></a>
                        <a href="https://google.ca" target="blank"><i class="fab fa-facebook fa-lg"></i></a>
                        <a href="https://google.ca" target="blank"><i class="fab fa-youtube fa-lg"/></a>
                    </div>
                </div>
                <hr className="bottom-line"/>
                <div className="back-section">
                    <Link className="back-button" to="/" style={{ textDecoration: 'none' }}>
                        ↜ Back to home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Confirm;
