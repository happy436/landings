import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <li className="app__laurels_awards-card">
        <img src={imgUrl} alt="img award" />
        <div className="app__laurels_awards-card_content">
            <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                {title}
            </p>
            <p className="p__cormorant">{subtitle}</p>
        </div>
    </li>
);

const Laurels = () => (
    <section className="app__bg app__wrapper section__padding" id="awards">
        <img src={images.logo} alt="logo" className="logo" />
        <div className="app__wrapper_info">
            <SubHeading title="Awards & Recognition" />
            <h2 className="headtext__cormorant">Our Laurels</h2>
            <ul className="app__laurels_awards">
                {data.awards.map((award) => (
                    <AwardCard award={award} key={award.title} />
                ))}
            </ul>
        </div>
        <div className="app__wrapper_img">
            <img src={images.laurels} alt="laurels" />
        </div>
    </section>
);

export default Laurels;
