import React, { useState } from "react";
import { images } from "../../constants";
import "./header.css";

const Burger = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="#fff"
        style={{ width: "27px" }}
        className="cursor-pointer app__navbar-hamburger"
    >
        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
    </svg>
);

export const Cross = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </svg>
);

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleActiveToggleMenu = () => {
        setToggleMenu((prev) => !prev);
        console.log(toggleMenu);
    };
    return (
        <>
            <header className="oragnicFood__header organicFood__bg">
                <nav className="flex items-center py-[35px] max-w-[1200px] mx-auto gap-3">
                    <button
                        onClick={handleActiveToggleMenu}
                        className="organicFood__header_burger"
                    >
                        <Burger />
                    </button>
                    <a href="#main">
                        <img src={images.logo} className="max-w-[200px]" />
                    </a>
                    <ul className={`oragnicFood__header_navList`}>
                        {["Programs", "About", "Clients"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="transition-all cursor-pointer hover:underline hover:decoration-2 hover:delay-500"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div
                className={`oragnicFood__header_navList ${
                    toggleMenu && "activeButton"
                } organicFood__bg animate-slideTopAndFade relative`}
            >
                <button onClick={handleActiveToggleMenu} className="w-[30px] h-[30px] fill-white top-[20px] right-[20px] absolute">
                    <Cross />
                </button>
                <ul className={`flex gap-3 flex-col `}>
                    {["Programs", "About", "Clients"].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={handleActiveToggleMenu}
                                className="transition-all cursor-pointer hover:underline hover:decoration-2 hover:delay-500"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;
