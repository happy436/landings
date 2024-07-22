import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
    <section className="app__newsletter">
        <div className="app__newsletter-heading">
            <SubHeading title="Newsletter" />
            <h2 className="headtext__cormorant" style={{textAlign:"center"}}>Subscribe To Our Newsletter</h2>
            <p className="p__opensans">And Never Miss Latest Updates!</p>
        </div>
        <div className="app__newsletter-input flex__center">
            <input type="email" placeholder="Enter your email address" />
            <button className="custom__button">Subscribe</button>
        </div>
    </section>
);

export default Newsletter;
