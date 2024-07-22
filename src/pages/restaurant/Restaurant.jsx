import React from "react";
import {
    AboutUs,
    Chef,
    FindUs,
    Footer,
    Gallery,
    Header,
    Intro,
    Laurels,
    SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

function Restaurant() {
    return (
        <>
            <Navbar />
            <main>
                <Header />
                <AboutUs />
                <SpecialMenu />
                <Chef />
                <Intro />
                <Laurels />
                <Gallery />
                <FindUs />
                <Footer />
            </main>
        </>
    );
}

export default Restaurant;
