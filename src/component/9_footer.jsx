import "../css/reset.css";
import "../css/index.css";

import React from "react";

import logo from "../img/logo.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="div-7">
                <img className="img-2" alt="Logo" src={logo} />
                <nav className="links">
                    <a href="#link1" className="text-wrapper-3">
                        Посилання Один
                    </a>
                    <a href="#link2" className="text-wrapper-3">
                        Посилання Два
                    </a>
                    <a href="#link3" className="text-wrapper-3">
                        Посилання Три
                    </a>
                    <a href="#link4" className="link-four">
                        Посилання Чотири
                    </a>
                </nav>
            </div>
            <p className="element-relume-all">© 2024 Relume. Всі права захищені.</p>
        </footer>
    );
};