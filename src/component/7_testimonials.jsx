import '../css/7_testimonals.css';
import React, { useState } from "react";

import logo from "../img/svg/logo.svg";
import imgPerson1 from "../img/S6_person1.jpg";
import imgPerson2 from "../img/S6_person2.jpg";

const testimonialsData = [
    {
        comment: "\"Зустріч з літніми драконами була неймовірною! Я відчував, як їхня магія наповнює повітря.\"",
        name: "Олександр Петров",
        title: "Мандрівник, Україна",
        img: imgPerson1
    },
    {
        comment: "\"Ці дракони справжні! Їхня мудрість і велич вражають з першого погляду.\"",
        name: "Марія Іванова",
        title: "Дослідник, Польща",
        img: imgPerson2
    }
];

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % testimonialsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const { comment, name, title, img } = testimonialsData[currentIndex];

    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-container-logo">
                    <img
                        className="testimonials-container-logo-img logo"
                        alt="Placeholder"
                        src={logo}
                    />
                </div>

                <div className="testimonials-container-comment">
                    <h5 className="testimonials-container-comment-h5 h4">
                        {comment}
                    </h5>
                    <img
                        className="testimonials-container-person-img"
                        alt="Placeholder"
                        src={img}
                    />
                    <h4 className="testimonials-container-comment-h4 h4">{name}</h4>
                    <span className="testimonials-container-comment-text text">{title}</span>
                </div>

                <div className="testimonials-container-manage">
                    <button className="testimonials-container-manage-button button4" onClick={handlePrev}>&#8592;</button>
                    <span className="testimonials-container-manage-indicator">{currentIndex + 1} / {testimonialsData.length}</span>
                    <button className="testimonials-container-manage-button button4" onClick={handleNext}>&#8594;</button>
                </div>
            </div>
        </section>
    );
};