import '../css/7_testimonals.css';
import React from "react";

import logo from "../img/logo.svg";
import imgPerson1 from "../img/S6_person1.jeg";
import imgPerson2 from "../img/S6_person2.jeg";

export const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-container-logo">
                    <img
                        className="testimonials-container-logo-img logo"
                        alt="Placeholder"
                        src={logo}
                    />
                </div>

                <div className="testimonials-container-comment">
                    <h3 className="testimonials-container-comment-h3 h3">
                        "Зустріч з літніми драконами була неймовірною! Я відчував, як їхня магія наповнює повітря."
                    </h3>
                    <img
                        className="testimonials-container-person-img"
                        alt="Placeholder"
                        src={imgPerson1}
                    />
                    <h4 className="testimonials-container-comment-h4 h4">Олександр Петров</h4>
                    <span className="testimonials-container-comment-text text">Мандрівник, Україна</span>
                </div>
                <div className="testimonials-container-comment">
                    <h3 className="testimonials-container-comment-h3 h3">
                        "Ці дракони справжні! Їхня мудрість і велич вражають з першого погляду."
                    </h3>
                    <img
                        className="testimonials-container-person-img"
                        alt="Placeholder"
                        src={imgPerson2}
                    />
                    <h4 className="testimonials-container-comment-h4 h4">Марія Іванова</h4>
                    <span className="testimonials-container-comment-text text">Дослідник, Польща</span>
                </div>

                <div className="testimonials-container-manage">
                    <button className="testimonials-container-manage-button button4">-&gt;</button>
                    <span className="testimonials-container-manage-indicator">...</span>
                    <button className="testimonials-container-manage-button button4">&lt;-</button>
                </div>
            </div>
        </section>
    );
};