import "../css/reset.css";
import "../css/index.css";

import React from "react";

import logo from "../img/logo.svg";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="content">
                    <img className="column" alt="Column" src={logo} />
                    <div className="div">
                        <div className="column-2">
                            <a href="#elders" className="link">
                                <span className="link-text-2">Старейшини</span>
                            </a>
                            <a href="#legend" className="link">
                                <span className="link-text-2">Легенда</span>
                            </a>
                            <a href="#abilities" className="link">
                                <span className="link-text-2">Унікальні здібності</span>
                            </a>
                            <div className="nav-link-dropdown-wrapper">
                                <div className="nav-link-dropdown">
                                    <span className="link-text-3">Інші</span>
                                </div>
                                <div className="hover-menu">
                                    <a href="#team" className="link-text">
                                        Команда
                                    </a>
                                    <a href="#reviews" className="text-wrapper">
                                        Відгуки
                                    </a>
                                    <a href="#contacts" className="text-wrapper">
                                        Контакти
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="column-3">
                            <button className="style-secondary button">Відгук</button>
                            <button className="style-primary-small button-2">
                                Приєднатися
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};