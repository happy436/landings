import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
    <section
        className="app__specialMenu flex__center section__padding"
        id="menu"
    >
        <div className="app__specialMenu_title">
            <SubHeading title="Menu That Fits Your Palatte" />
            <h2 className="headtext__cormorant">Today's Special</h2>
        </div>
        <div className="app__specialMenu_menu">
            <div className="app__specialMenu_menu_wine flex__center">
                <p className="app__specialMenu_menu_heading">Wine & Beer</p>
                <ul className="app__specialMenu_menu_items">
                    {data.wines.map((wine, index) => (
                        <MenuItem
                            key={wine.title + index}
                            title={wine.title}
                            price={wine.price}
                            tags={wine.tags}
                        />
                    ))}
                </ul>
            </div>

            <div className="app__specialMenu_menu_img">
                <img src={images.menu} alt="menu img" />
            </div>
            <div className="app__specialMenu_menu_cocktails flex__center">
                <p className="app__specialMenu_menu_heading">Cocktails</p>
                <ul className="app__specialMenu_menu_items">
                    {data.cocktails.map((cocktail, index) => (
                        <MenuItem
                            key={cocktail.title + index}
                            title={cocktail.title}
                            price={cocktail.price}
                            tags={cocktail.tags}
                        />
                    ))}
                </ul>
            </div>
        </div>
        <div style={{ marginTop: "15px" }}>
            <button type="button" className="custom__button">
                View More
            </button>
        </div>
    </section>
);

export default SpecialMenu;
