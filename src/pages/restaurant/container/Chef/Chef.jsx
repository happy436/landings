import React from "react";
import {images} from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
    <section className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef" />
        </div>
        <div className="app__wrapper_info">
            <SubHeading title="Chef's Word" />
            <h2 className="headtext__cormorant">What We Believe In</h2>
            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                    <img
                        src={images.quote}
                        alt="quote"
                        style={{ float: "left", marginRight: "20px" }}
                    />
                    <p className="p__opensans" style={{ paddingTop: "40px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis illum recusandae aut rerum autem?
                        Repudiandae, laboriosam! Obcaecati, perferendis
                        excepturi est repellendus cumque, magni debitis ipsum
                        sapiente unde corrupti doloremque quisquam!
                    </p>
                </div>
            </div>
            <div className="app__chef-sign">
                <p>Kevin Luo</p>
                <p className="p__opensans">Chef & Founder</p>
                <img src={images.sign} alt="sign" />
            </div>
        </div>
    </section>
);

export default Chef;
