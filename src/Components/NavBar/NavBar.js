import React from "react";
import NameLogo from "../../Assets/NameLogo/NameLogo.png";
import "./NavBar.css";

function NavBar() {
    return <div className="nav-bar">
        <div className="nav-left">
            <img className="name-logo" src={NameLogo} alt="Name Logo" />
        </div>
        <div className="nav-right">
            <a href="/about">About Me</a>
            <a href="/contact">Contact Me</a>
            <a href="/projects">Projects</a>
        </div>
    </div>
}

export default NavBar;