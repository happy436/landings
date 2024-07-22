import React from "react";
import {images} from "../../constants"

const IconLeaf = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
    </svg>
);
const IconGem = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z" />
    </svg>
);
const IconEgg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z" />
    </svg>
);
const IconPizza = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </svg>
);

function Skills() {
    const skillsList = [
        {
            title: "quality",
            desc: "We work with the best suppliers to make sure you get the top-quality dishes, beverages, and service.",
            icon: <IconGem />,
        },
        {
            title: "organic",
            desc: "All ingredients we use are 100% organic and fresh. Such approach makes our food a lot healthier.",
            icon: <IconLeaf />,
        },
        {
            title: "tasty",
            desc: "Great and unforgettable taste of our dishes is what attracts more and more clients to Plate.",
            icon: <IconPizza />,
        },
        {
            title: "diverse",
            desc: "Our team regularly updates the menus to provide you with better food diversity whenever you order.",
            icon: <IconEgg />,
        },
    ];
    return (
        <section className="bg-salad pt-20 pb-28 relative overflow-hidden organicFood__bg" id="choose">
            <div className="absoulute">
                <div className="absolute bottom-[-100px] right-0 opacity-20">
                    <img src={images.slider41} />
                </div>
                <div className="absolute right-20 top-0 opacity-20">
                    <img src={images.slider42} />
                </div>
                <div className="absolute right-[-200px]">
                    <img src={images.slider43} />
                </div>
            </div>

            <ul className="flex flex-wrap container mx-auto gap-6 items-center justify-center z-10">
                {skillsList.map((item, index) => (
                    <li key={index} className="w-1/2 sm:w-1/3 mb-6">
                        <div className="flex flex-col gap-3 items-start">
                            <div className="flex gap-3">
                                <span className="w-[30px] fill-white">{item.icon}</span>

                                <h3 className="uppercase font-bold text-[20px] items-start">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-[16px]">{item.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
