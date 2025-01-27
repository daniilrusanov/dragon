import '../css/9_footer.css';
import React from "react";

import logo from "../img/logo.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-upper-section">
                <div className="text-wrapper-1">
                    <div className="footer-upper-section-left">
                        <img className="footer-upper-section-left-logo" alt="Logo" src={logo} />
                        <nav className="footer-upper-section-left-links">
                            <a href="#link1" className="link-text">
                                Посилання Один
                            </a>
                            <a href="#link2" className="link-text">
                                Посилання Два
                            </a>
                            <a href="#link3" className="link-text">
                                Посилання Три
                            </a>
                            <a href="#link4" className="link-text">
                                Посилання Чотири
                            </a>
                        </nav>
                    </div>
                    <div className="footer-upper-section-right">
                        <h2 className="footer-upper-section-right-h4 h4">Підписатися</h2>
                        <input className="footer-upper-section-right-input input" type="email" placeholder="Введіть ваш email" />
                        <button className="footer-upper-section-right-button button1">Підписатися</button>
                        <span className="footer-upper-section-right-text text">Підписуючись, ви погоджуєтеся з нашою Політикою конфіденційності.</span>
                    </div>
                </div>
            </div>

            <div className="footer-middle-section">
            </div>

            <div className="footer-lower-section">
                <div className="footer-lower-section-left">
                    <a href="#link1" className="link-text">
                        privacy Police
                    </a>
                    <a href="#link2" className="link-text">
                        Умови обслуговування
                    </a>
                    <a href="#link3" className="link-text">
                        Налаштування Cookies
                    </a>
                </div>
                <div className="footer-lower-section-right">
                    <span className="text">
                        © 2024 Dragons. Всі права захищені.
                    </span>
                </div>
            </div>
        </footer>
    );
};