import './legend.css';
import React, { useEffect, useState } from "react";
import { fetchDragonsData } from '../../js/fetchDragonsData';

export const Legend = () => {
    const [legend, setLegend] = useState({});

    useEffect(() => {
        const getDragonsData = async () => {
            try {
                const data = await fetchDragonsData();
                const legendData = data.find(dragon => dragon.id === 7);
                setLegend(legendData);
            } catch (error) {
                console.error('Error fetching dragons data:', error);
            }
        };

        getDragonsData();
    }, []);

    useEffect(() => {
        const firefliesContainer = document.querySelector(".fireflies");
        const legendSection = document.querySelector("#legend");

        const createFireflies = () => {
            if (firefliesContainer) {
                for (let i = 0; i < 200; i++) {
                    const firefly = document.createElement("div");
                    firefly.classList.add("firefly");

                    // Random starting position
                    firefly.style.top = `${Math.random() * 100}%`;
                    firefly.style.left = `${Math.random() * 100}%`;

                    // Random animation duration
                    firefly.style.animationDuration = `${6 + Math.random() * 2}s`;

                    // Apply reverse animation to half of the fireflies
                    if (i % 2 === 0) {
                        firefly.classList.add("reverse");
                    }

                    firefliesContainer.appendChild(firefly);
                }
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    createFireflies();
                    observer.unobserve(legendSection);
                }
            });
        });

        observer.observe(legendSection);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="legend" id="legend">
            <div className="fireflies"></div>
            <h2 className="legend-h2 h2">{legend.title}</h2>
            <p className="legend-text text">
                {legend.text}
            </p>
        </section>
    );
};
