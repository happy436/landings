import { useState } from "react";
import "./index.css";
import "./animations.css";
import Services from "./containers/services/Services";
import Header, { Cross } from "./components/header/Header";
import ButtonOnTop from "./components/buttonOnTop/ButtonOnTop";
import About from "./containers/about/About";
import FoodPackages from "./containers/foodPackages/FoodPackages";
import Steps from "./containers/steps/Steps";
import Skills from "./containers/skills/Skills";
import Testimonials from "./containers/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function OrganicFood() {
    const [toggleActivePanel, setToggleActivePanel] = useState(false);
    const handleActivePanel = () => {
        setToggleActivePanel((prev) => !prev);
    };

    return (
        <div className="organicFood">
            <Header />
            <ButtonOnTop />
            <main className="w-screen bg-slate-50 organicFood">
                <button
                    className="organicFood__signUpButton"
                    onClick={handleActivePanel}
                >
                    <div className="organicFood__signUpButton-button flex__center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="black"
                            className="size-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                        </svg>
                    </div>
                </button>
                <div
                    className={`organicFood__signUpPanel organicFood__bg ${
                        toggleActivePanel && "activeSignUpPanel"
                    }`}
                >
                    <h2>Subscribe to our News</h2>
                    <button
                        className="w-[30px] h-[30px] fill-white top-[20px] right-[20px] absolute"
                        onClick={handleActivePanel}
                    >
                        <Cross />
                    </button>
                    <input
                        placeholder="Enter your email"
                        className="rounded-xl pl-4"
                        type="email"
                    />
                    <button className="subscribe" onClick={handleActivePanel}>
                        Subscribe
                    </button>
                </div>
                <Services />
                <About />
                <FoodPackages />
                <Steps />
                <Skills />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}

export default OrganicFood;
