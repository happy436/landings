import React from "react";
import { images } from "../../constants";
import "./foodPackages.css"

function FoodPackages() {
    const foodPackagesList = [
        {
            name: "detox",
            price: "15",
            description:
                "The best choice if you are looking for tasty & light yet healthy food to start your day full of energy.",
            img: images.slider13,
        },
        {
            name: "vegan",
            price: "22",
            description:
                "Special menu developed for our vegan clients who appreciate healthy and plant-based food.",
            img: images.slider32,
        },
        {
            name: "balanced",
            price: "30",
            description:
                "If you need daily balanced menu including breakfast & dinner, then Balanced package is what you need!",
            img: images.slider31,
        },
    ];
    return (
        <section className="organicFood__bg pt-20 pb-20" id="programs">
            <div className="container mx-auto">
                <div className="flex justify-center items-center flex-col w-full">
                    <h3 className="uppercase text-[20px] font-bold text-slate-50/50">
                        what we offer
                    </h3>
                    <h2 className="uppercase text-[40px] font-bold">
                        food packages
                    </h2>
                    <ul className="flex flex-wrap gap-3 items-center justify-center flex-col sm:flex-row">
                        {foodPackagesList.map((item, index) => (
                            <li
                                key={index}
                                className="text-black bg-white shadow-xl my-8 mx-auto pt-[48px] pr-[10px] pb-[68px] pl-[36px] sm:w-1/3 mx-[20px]"
                                style={{
                                    borderRadius: "10px 100px 70px 70px",
                                }}
                            >
                                <div className="flex flex-col gap-4 relative">
                                    <div className="flex">
                                        <div>
                                            <h3 className="uppercase text-[20px] font-bold">
                                                {item.name}
                                            </h3>
                                            <div className="flex justify-start">
                                                <div className="text-[20px] font-bold">
                                                    $
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-[80px] p-0 leading-none">
                                                        {item.price}
                                                    </p>
                                                    <p className="uppercase text-[16px]">
                                                        per day
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-2/3 absolute top-[-70px] right-[-20px]">
                                            <img
                                                src={item.img}
                                                className="shadow-2xl rounded-full w-full"
                                            />
                                        </div>
                                    </div>

                                    <p className="text-slate-500">
                                        {item.description}
                                    </p>
                                    <button className="uppercase organicFood__bg text-white sm:py-5 sm:px-10 py-2 px-5 hover:bg-slate-800 hover:border-slate-800 rounded-full font-bold border-b-4 border-emerald-800 max-w-max">
                                        order now
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default FoodPackages;
