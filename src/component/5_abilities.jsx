import '../css/5_abilities.css';
import React from "react";

import imgAbilities from "../img/S4_Abilities.jpeg";

export const Abilities = () => {
    return (
        <section className="abilities" id="abilities">
            <div className="abilities-container">
                <div className="abilities-container-column-1">
                    <h2 className="abilities-container-h2 h2">Унікальні здібності</h2>
                    <p className="abilities-container-text text">
                        Літні дракони вражають своєю розгромною магією вогню...
                    </p>
                    <button className="abilities-container-button button1">Дізнатися</button>
                    <button className="abilities-container-button button3">Дослідити</button>
                </div>
                <div className="abilities-container-column-2">
                    <img
                        className="abilities-container-button-img img"
                        alt="Placeholder"
                        src={imgAbilities}
                    />
                </div>
            </div>
        </section>
    );
};