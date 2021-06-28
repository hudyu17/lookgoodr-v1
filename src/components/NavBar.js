import React, { Link } from 'react';
import logo from "../assets/logo-purple-shadow.png";
import "../App.css";

const NavBar = () => {
    return (
        <div>
            <div className="logo-row">
                {/* <Link to="/"> */}
                    <img className="logo" src={logo}/>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default NavBar;
