import React, { useState } from "react";

import "./Navbar.css";

/* import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md"; */

import {images} from "../../constants";

const Navbar = () => {
    const linksList = ["Home", "About", "Menu", "Awards", "Contact"];
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleActiveToggleMenu = () => {
        setToggleMenu((prev) => !prev);
    };
    return (
        <header className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.gericht} alt="app logo" />
            </div>
            <nav>
                <ul className="app__navbar-links">
                    {linksList.map((item, index) => (
                        <li key={index} className="p__opensans">
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">
                    Log in / Register
                </a>
                <div></div>
                <a href="/" className="p__opensans">
                    Book Table
                </a>
            </div>
            <div className="app__navbar-smallscreen">
                {/* <GiHamburgerMenu
                    color="#fff"
                    fontSize={27}
                    onClick={handleActiveToggleMenu}
                /> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                    style={{ width: "27px" }}
                    onClick={handleActiveToggleMenu}
                    className="cursor-pointer app__navbar-hamburger"
                >
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        {/* <MdOutlineRestaurantMenu
                        fontSize={27}
                        className="overlay__close"
                        onClick={handleActiveToggleMenu}
                    /> */}
                        <svg
                            fill="#fff"
                            style={{ width: "27px" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="overlay__close"
                            onClick={handleActiveToggleMenu}
                        >
                            <path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
                        </svg>
                        <nav>
                            <ul className="app__navbar-smallscreen_links">
                                {linksList.map((item, index) => (
                                    <li key={index} className="p__opensans">
                                        <a href={`#${item.toLowerCase()}`}>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
