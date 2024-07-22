import React, { useState, useEffect } from "react";
import "./services.css";
import { images } from "../../constants";

function Services() {
    const [sliderIndex, setSliderIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const dataSlider = [
        {
            subtitle: "welcome to plate",
            title: "delivery service",
            titleBoble: "#1",
            description:
                "Plate offers quick delivery of organic & healthy food all over the state.",
            slogan: "Why Choose Plate",
            img: images.slider11,
        },
        {
            subtitle: "delivery throughout the country",
            title: "supported locations",
            titleBoble: "250",
            description:
                "Our food delivery service is available in more than 200 cities for your comfort.",
            slogan: "Nationwide Delivery",
            img: images.slider12,
        },
        {
            subtitle: "best dishes & ingredients",
            title: "Delicious food",
            titleBoble: "100%",
            description:
                "Plate regularly updates the menus to make sure our customers eat the best and the tastiest food.",
            slogan: "Organic Ingredients",
            img: images.slider13,
        },
        {
            subtitle: "our clients trust us",
            title: "positive reviews",
            titleBoble: "3K",
            description:
                "Our clients reviews are the best way to learn more about our food delivery service.",
            slogan: "Reviews & Testimonials",
            img: images.slider14,
        },
    ];
    useEffect(() => {
        setIsFullscreen(true);
        const timeout = setTimeout(() => setIsFullscreen(false), 1000);

        return () => clearTimeout(timeout);
    }, [sliderIndex]);
    const handleChangeMainSliderIndex = (index) => {
        setSliderIndex(index);
    };
    return (
        <section className="organicFood__services organicFood__bg" id="main">
            <div className="mx-10 pt-[50px] sm:pt-[100px]">
                <div className="organicFood__container organicFood__services_wrapper">
                    <div className="organicFood__services_bgText ">
                        FOOD
                    </div>
                    <div className="organicFood__services_info">
                        {dataSlider.map((item, index) => {
                            if (sliderIndex === index) {
                                return (
                                    <div key={index}>
                                        <h3 className="uppercase text-[20px] font-semibold delay-1 animate-slideRightAndFade ">
                                            {item.subtitle}
                                        </h3>
                                        <div className="relative  mt-2">
                                            <span className=" animate-slideLeftAndFade z-10 delay-1 organicFood__services_title-booble flex__center">
                                                {item.titleBoble}
                                            </span>
                                            <h1 className="animate-slideLeftAndFade delay-1 organicFood__services_title">
                                                {item.title}
                                            </h1>
                                        </div>
                                        <p className="delay-500 animate-slideLeftAndFade delay-1 text-[18px] mt-[21px]">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                        <ul className="flex items-end mt-[50px] relative max-w-min">
                            {[1, 2, 3, 4].map((item, index) => (
                                <li className="flex flex-col " key={item}>
                                    <button
                                        onClick={() =>
                                            handleChangeMainSliderIndex(
                                                item - 1
                                            )
                                        }
                                        className={`transition-all delay-200 pb-5 pr-5 ${
                                            index === sliderIndex
                                                ? "opacity-100 text-[30px]"
                                                : "opacity-70 text-[20px]"
                                        }`}
                                    >
                                        {String(item).padStart(2, "0")}
                                    </button>
                                    <span
                                        className={`${
                                            index === sliderIndex && "h-[4px]"
                                        } bg-white w-full`}
                                    ></span>
                                </li>
                            ))}
                            <span className="h-[1px] bg-white w-full absolute left-0"></span>
                        </ul>
                        {dataSlider.map((item, index) => {
                            if (sliderIndex === index) {
                                return (
                                    <p
                                        key={index}
                                        className="text-[16px] delay-1 animate-slideLeftAndFade opacity-70 mt-[20px]"
                                    >
                                        {item.slogan}
                                    </p>
                                );
                            }
                        })}
                    </div>
                    <div className="organicFood_services_image">
                        <div
                            className={`organicFood__services_circle ${
                                isFullscreen ? "fullscreen" : ""
                            }`}
                        ></div>
                        {dataSlider.map((item, index) => {
                            if (sliderIndex === index)
                                return (
                                    <img
                                        key={index}
                                        src={item.img}
                                        className="w-[500px] relative shadow-xl hover:shadow-md rounded-full z-10 animate-slideTopAndFade"
                                    />
                                );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
