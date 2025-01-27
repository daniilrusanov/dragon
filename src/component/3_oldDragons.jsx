import '../css/3_oldDragons.css';
import React from "react";

import imgOldDragons1 from "../img/S2_OldDragons1.jpeg";
import imgOldDragons2 from "../img/S2_OldDragons2.jpeg";

export const OldDragons = () => {
    return (
        <section className="oldDragons" id="elders">
            <div className="oldDragons-header">
                <h2 className="oldDragons-header-h2 h2">Старейшини драконів</h2>
                <p className="oldDragons-header-text text">Досліджуйте таємниці стародавніх драконів</p>
            </div>
            <div className="oldDragons-container">
                <div className="oldDragons-container-main">
                    <article className="oldDragons-container-main-column-1">
                        <img
                            className="oldDragons-container-main-image"
                            alt="Placeholder"
                            src={imgOldDragons1}
                        />
                        <div className="oldDragons-container-main-content">
                            <h3 className="oldDragons-container-main-content-h3 h3">Дракон Громовержець</h3>
                            <p className="oldDragons-container-main-content-text text">
                                Сила та мудрість, що вражають уяву.
                            </p>
                            <div className="oldDragons-container-main-content-tags">
                                <span className="tag text">Мудрість</span>
                                <span className="tag text">Сила</span>
                                <span className="tag text">Легенда</span>
                            </div>
                            <button className="oldDragons-container-main-content-button button3">
                                Переглянути проект
                            </button>
                        </div>
                    </article>
                    <article className="oldDragons-container-main-column-2">
                        <img
                            className="oldDragons-container-main-image"
                            alt="Placeholder"
                            src={imgOldDragons2}
                        />
                        <div className="oldDragons-container-main-content">
                            <h3 className="oldDragons-container-main-content-h3 h3">Дракон Вогняний</h3>
                            <p className="oldDragons-container-main-content-text text">
                                Вогонь, що приносить тепло та світло.
                            </p>
                            <div className="oldDragons-container-main-content-tags">
                                <span className="tag text">Вогонь</span>
                                <span className="tag text">Тепло</span>
                                <span className="tag text">Сила</span>
                            </div>
                            <button className="oldDragons-container-main-content-button button3">
                                Переглянути проект
                            </button>
                        </div>
                    </article>
                </div>
                <button className="oldDragons-container-button button1">
                    Переглянути всі
                </button>
            </div>
        </section>
    );
};