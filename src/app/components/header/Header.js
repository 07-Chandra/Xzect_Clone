"use client";

import React, { useState } from "react";
import "./Header.css";
// import logo from "../../../../public/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import NavItem from "../navItem/NavItem";
function Header() {
    const [click, setClick] = useState(false);
    return (
        <div className="nav-container">
            <div className="navbar">
                <div className="main-logo">
                    <div className="image-div">
                        <img
                            className="img"
                            src="https://www.xzect.com/assets/images/xzect-logo.svg"
                        />
                    </div>
                    <div className="name">
                        <h2 className="website-name">Xzect</h2>
                    </div>
                </div>
                <div
                    className="hamburger-icon"
                    onClick={() => setClick(!click)}
                >
                    {!click ? (
                        <GiHamburgerMenu className="icon" />
                    ) : (
                        <RxCross1 className="icon" />
                    )}
                </div>
            </div>
            {click ? <NavItem /> : " "}
        </div>
    );
}

export default Header;
