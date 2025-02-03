import './testimonials.css';
import React, {useEffect, useState} from "react";
import {fetchDragonsData} from '../../js/fetchDragonsData';
import logo from "../../svg/logo.svg";

export const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const getDragonsData = async () => {
            try {
                const data = await fetchDragonsData();
                const testimonialsData = data.filter(dragon => dragon.id >= 13 && dragon.id <= 15);
                setTestimonials(testimonialsData);
            } catch (error) {
                console.error('Error fetching dragons data:', error);
            }
        };

        getDragonsData();
    }, []);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    };

    if (testimonials.length === 0) {
        return <div>Loading...</div>;
    }

    const {comment, title, subtitle, img} = testimonials[currentIndex];

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
                    <h4 className="testimonials-container-comment-h4 h4">{title}</h4>
                    <span className="testimonials-container-comment-text text">{subtitle}</span>
                </div>

                <div className="testimonials-container-manage">
                    <button className="testimonials-container-manage-button button4"
                            onClick={handlePrev}>&#8592;</button>
                    <span
                        className="testimonials-container-manage-indicator">{currentIndex + 1} / {testimonials.length}</span>
                    <button className="testimonials-container-manage-button button4"
                            onClick={handleNext}>&#8594;</button>
                </div>
            </div>
        </section>
    );
};
