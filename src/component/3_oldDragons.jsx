import "../css/reset.css";
import "../css/index.css";

import React from "react";

import imgOldDragons1 from "../img/S2_OldDragons1.jpeg";
import imgOldDragons2 from "../img/S2_OldDragons2.jpeg";

export const OldDragons = () => {
    return (
        <section className="div-2" id="elders">
            <div className="div-3">
                <h2 className="heading">Старейшини драконів</h2>
                <p className="text">Досліджуйте таємниці стародавніх драконів</p>
            </div>
            <div className="content-5">
                <div className="portfolio-list">
                    <div className="row">
                        <article className="div-4">
                            <img
                                className="placeholder-image-3"
                                alt="Placeholder"
                                src={imgOldDragons1}
                            />
                            <div className="content-2">
                                <h3 className="heading-2">Дракон Громовержець</h3>
                                <p className="text-wrapper">
                                    Сила та мудрість, що вражають уяву.
                                </p>
                                <div className="tags">
                                    <span className="text-only-false text-3">Мудрість</span>
                                    <span className="text-only-false text-4">Сила</span>
                                    <span className="text-only-false-2 text-4">Легенда</span>
                                </div>
                                <button className="style-link-small button-3">
                                    Переглянути проект
                                </button>
                            </div>
                        </article>
                        <article className="div-4">
                            <img
                                className="placeholder-image-3"
                                alt="Placeholder"
                                src={imgOldDragons2}
                            />
                            <div className="content-2">
                                <h3 className="heading-2">Дракон Вогняний</h3>
                                <p className="text-wrapper">
                                    Вогонь, що приносить тепло та світло.
                                </p>
                                <div className="tags">
                                    <span className="text-only-false text-4">Вогонь</span>
                                    <span className="text-only-false text-4">Тепло</span>
                                    <span className="text-only-false-2 text-4">Сила</span>
                                </div>
                                <button className="style-link-small-2 button">
                                    Переглянути проект
                                </button>
                            </div>
                        </article>
                    </div>
                </div>
                <button className="style-secondary-wrapper button-4">
                    Переглянути всі
                </button>
            </div>
        </section>
    );
};