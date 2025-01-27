import "../css/reset.css";
import "../css/index.css";

import React from "react";

import imgHeader1 from "../img/S1_header1.jpeg";
import imgHeader2 from "../img/S1_header4.jpeg";
import imgHeader3 from "../img/S1_header3.jpeg";
import imgHeader4 from "../img/S1_header2.jpeg";

export const Header = () => {
    return (
        <header className="header">
            <div className="container-2">
                <div className="column-4">
                    <h1 className="medium-length-hero">
                        Ласкаво просимо у світ літніх драконів!
                    </h1>
                    <p className="lorem-ipsum-dolor">
                        Відкрийте для себе магію стародавніх драконів, які літають над
                        нашими головами. Приготуйтеся до незабутніх пригод та захоплюючих
                        історій!
                    </p>
                    <div className="actions">
                        <button className="button-wrapper button-2">Приєднатися</button>
                        <button className="div-wrapper button">Зв'язатися</button>
                    </div>
                </div>
                <div className="content-3">
                    <div className="column-5">
                        <img
                            className="placeholder-image"
                            alt="Placeholder"
                            src={imgHeader1}
                        />
                        <img
                            className="placeholder-image-2"
                            alt="Placeholder"
                            src={imgHeader2}
                        />
                    </div>
                    <div className="column-6">
                        <img
                            className="placeholder-image"
                            alt="Placeholder"
                            src={imgHeader3}
                        />
                        <img
                            className="placeholder-image-2"
                            alt="Placeholder"
                            src={imgHeader4}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};