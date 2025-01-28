import '../css/1_navbar.css';
import React from "react";
import { useState } from "react";

import logo from "../img/logo.svg";

export const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-container-content">
                    <img
                        className="navbar-logo"
                        alt="Column"
                        src={logo}
                    />

                    <div className="navbar-container-content-text">
                        <div className="navbar-container-content-text-links">
                            <a href="#header" className="link-text">
                                <span className="link-text-2">Вгору</span>
                            </a>
                            <a href="#oldDragons" className="link-text">
                                <span className="link-text-2">Старейшини</span>
                            </a>
                            <a href="#legend" className="link-text">
                                <span className="link-text-2">Легенда</span>
                            </a>
                            <a href="#abilities" className="link-text">
                                <span className="link-text-2">Унікальні здібності</span>
                            </a>
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="drop-button">Інше &#9660;</button>
                                {dropdownOpen && (
                                    <div className="dropdown-content">
                                        <a href="#team" className="link-text">Команда</a>
                                        <a href="#testimonals" className="link-text">Відгуки</a>
                                        <a href="#contacts" className="link-text">Контакти</a>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="navbar-container-content-text-buttons">
                            <button className="navbar-container-content-text-buttons-1 button1">Відгук</button>
                            <button className="navbar-container-content-text-buttons-2 button2">Приєднатися</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};