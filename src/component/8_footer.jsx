import '../css/8_footer.css';
import React from "react";

import logo from "../svg/logo.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-upper-section">
                <div className="footer-columns">
                    <div className="footer-upper-section-left">
                        <img className="footer-upper-section-left-logo logo" alt="Logo" src={logo} />
                        <nav className="footer-upper-section-left-links">
                            <a href="" className="link-text">Консультації</a>
                            <a href="" className="link-text">Тренування</a>
                            <a href="" className="link-text">Навчання</a>
                            <a href="" className="link-text">Промо акції</a>
                        </nav>
                    </div>
                    <div className="footer-upper-section-right">
                        <div className="footer-upper-section-right-wrapper">
                            <h2 className="footer-upper-section-right-h4 h4">Підписатися</h2>
                            <div className="footer-upper-section-right-input-group">
                                <input className="footer-upper-section-right-input input" type="email"
                                       placeholder="Введіть ваш email"/>
                                <button className="footer-upper-section-right-button button1">Підписатися</button>
                            </div>
                            <span className="footer-upper-section-right-text text">Підписуючись, ви погоджуєтеся з нашою Політикою конфіденційності.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-middle-section"></div>

            <div className="footer-lower-section">
                <div className="footer-lower-section-left">
                    <a href="" className="link-text">
                        Privacy Police
                    </a>
                    <a href="" className="link-text">
                        Умови обслуговування
                    </a>
                    <a href="" className="link-text">
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
