import './abilities.css';
import React, { useEffect, useState } from "react";
import { fetchDragonsData } from '../../js/fetchDragonsData';

export const Abilities = () => {
    const [abilities, setAbilities] = useState({});

    useEffect(() => {
        const getDragonsData = async () => {
            try {
                const data = await fetchDragonsData();
                const abilitiesData = data.find(dragon => dragon.id === 8);
                setAbilities(abilitiesData);
            } catch (error) {
                console.error('Error fetching dragons data:', error);
            }
        };

        getDragonsData();
    }, []);

    return (
        <section className="abilities" id="abilities">
            <div className="abilities-container">
                <div className="abilities-container-column-1">
                    <h2 className="abilities-container-h2 h2">{abilities.title}</h2>
                    <p className="abilities-container-text text">
                        {abilities.subtitle}
                    </p>
                    <button className="abilities-container-button button1">Дізнатися</button>
                    <button className="abilities-container-button button3">Дослідити &gt;</button>
                </div>
                <div className="abilities-container-column-2">
                    <img
                        className="abilities-container-button-img img"
                        alt={abilities.alt}
                        src={abilities.src}
                    />
                </div>
            </div>
        </section>
    );
};
