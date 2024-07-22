import React, { useState, useRef } from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Gallery.css";
import { InstagramIcon } from "../Footer/Footer";



const listImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
];

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
);

const Gallery = () => {
    const [active, setActive] = useState();
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === "left") {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };
    return (
        <section className="app__gallery flex__center">
            <div className="app__gallery-content">
                <SubHeading title="Instagram" />
                <h2 className="headtext__cormorant">Photo Gallery</h2>
                <p
                    className="p__opensans"
                    style={{ color: "#AAA", marginTop: "2rem" }}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                    recusandae possimus voluptatum consequuntur soluta illum
                    provident labore fugiat quia vitae aliquam ea, facere
                    dolorum nam tempora dicta, quod delectus incidunt.
                </p>
                <button className="custom__button" type="button">
                    View More
                </button>
            </div>
            <div className="app__gallery-images">
                <ul className="app__gallery-images_container" ref={scrollRef}>
                    {listImages.map((img, index) => (
                        <>
                            <li
                                className="app__gallery-images_card"
                                key={index}
                            >
                                <img src={img} alt="gallery image" />
                                <span className="gallery__image-icon">
                                    <InstagramIcon />
                                </span>
                            </li>
                        </>
                    ))}
                </ul>

                <div className="app__gallery-images_arrows">
                    <button
                        className="gallery__arrow-icon"
                        onClick={() => scroll("left")}
                    >
                        <ArrowLeftIcon />
                    </button>
                    <button
                        className="gallery__arrow-icon"
                        onClick={() => scroll("right")}
                    >
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
