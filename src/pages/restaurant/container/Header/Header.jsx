import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Header.css";

const Header = () => (
    <section className="app__header app__wrapper section__padding">
        <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavour" />
            <h2 className="app__header-h1">The Key to Fine Dining</h2>
            <p className="p__opensans" style={{ margin: "2rem 0" }}>
                Sit tellus lobortis sed senectus vivamus molestie. Condimentum
                volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
                aliquam amet tellus.
            </p>
            <button type="button" className="custom__buttom">
                Explore Menu
            </button>
        </div>
        <div className="app__wrapper_img">
            <img src={images.welcome} alt="header img" />
        </div>
    </section>
);

export default Header;
