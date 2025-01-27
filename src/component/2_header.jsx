import '../css/2_header.css';
import React from "react";

import imgHeader1 from "../img/S1_header1.jpeg";
import imgHeader2 from "../img/S1_header4.jpeg";
import imgHeader3 from "../img/S1_header3.jpeg";
import imgHeader4 from "../img/S1_header2.jpeg";

export const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-container-column-1">
                    <h1 className="header-container-h1 h1">
                        Ласкаво просимо у світ літніх драконів!
                    </h1>
                    <p className="header-container-text text">
                        Відкрийте для себе магію стародавніх драконів, які літають над
                        нашими головами. Приготуйтеся до незабутніх пригод та захоплюючих
                        історій!
                    </p>
                    <div className="header-container-buttons">
                        <button className="header-container-buttons-1 button1">Приєднатися</button>
                        <button className="header-container-buttons-2 button2">Зв'язатися</button>
                    </div>
                </div>
                <div className="header-container-column-2">
                    <div className="header-container-column-2_1">
                        <img
                            className="header-container-image img"
                            alt="Placeholder"
                            src={imgHeader1}
                        />
                        <img
                            className="header-container-image img"
                            alt="Placeholder"
                            src={imgHeader2}
                        />
                    </div>
                    <div className="header-container-column-2_2">
                        <img
                            className="header-container-image img"
                            alt="Placeholder"
                            src={imgHeader3}
                        />
                        <img
                            className="header-container-image img"
                            alt="Placeholder"
                            src={imgHeader4}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};