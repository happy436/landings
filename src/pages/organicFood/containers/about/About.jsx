import React from "react";
import { images } from "../../constants";

function About() {
    return (
        <section className="text-black pt-10" id="about">
            <div className="container mx-auto">
                <div className="flex justify-center items-center gap-14 flex-col sm:flex-row">
                    <div className="relative w-1/2 sm:1/3">
                        <img src={images.cheef} />
                        <div className=" top-1/4 absolute right-[-40px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg max-w-max">
                            <p className="text-black font-bold flex flex-col justify-center items-center text-[18px]">
                                Jason Fox
                            </p>
                            <p className="text-gray-800 flex flex-col justify-center items-center text-[16px]">
                                Head Cheef
                            </p>
                            <div className="absolute bottom-0 left-4 transform translate-x-[-50%] translate-y-[90%] w-0 h-0 border-t-[20px] border-t-white border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:w-1/2 flex__center p-[2rem]">
                        <h3 className="uppercase text-[20px] text-slate-400 font-bold">
                            About Us
                        </h3>
                        <h2 className="uppercase text-[40px] font-bold sm:text-start text-center">
                            HEALTHY FOOD CAN BE DELICIOUS
                        </h2>
                        <p className="text-slate-500 text-[16px]">
                            Plate was established in 2013, as a reliable food
                            service provider where anyone could order healthy
                            food they like.
                        </p>
                        <ul>
                            {[
                                "Choose gluten-free meals from our menu",
                                "The freshest ingredients for every dish",
                                "Get great discounts when ordering for 2+ people",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="text-[18px] relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-green-500 before:rounded-full"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="organicFood__bg uppercase bg-salad text-white py-5 px-20 hover:bg-slate-800 hover:border-slate-800 rounded-full font-bold border-b-4 border-emerald-800 max-w-max">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
