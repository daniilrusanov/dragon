import './oldDragons.css';
import React, {useEffect, useState} from "react";
import {fetchDragonsData} from '../../js/fetchDragonsData';

export const OldDragons = () => {
    const [oldDragons, setOldDragons] = useState([]);

    useEffect(() => {
        const getDragonsData = async () => {
            try {
                const data = await fetchDragonsData();
                setOldDragons(data.filter(dragon => dragon.id >= 5 && dragon.id <= 6));
            } catch (error) {
                console.error('Error fetching dragons data:', error);
            }
        };

        getDragonsData();
    }, []);

    return (
        <section className="oldDragons" id="oldDragons">
            <div className="oldDragons-header">
                <h2 className="oldDragons-header-h2 h2">Старейшини драконів</h2>
                <p className="oldDragons-header-text text">Досліджуйте таємниці стародавніх драконів</p>
            </div>
            <div className="oldDragons-container">
                <div className="oldDragons-container-main">
                    {oldDragons.map(dragon => (
                        <article key={dragon.id}
                                 className="oldDragons-container-main-column-1 oldDragons-container-main-column-2">
                            <img
                                className="oldDragons-container-main-image"
                                alt={dragon.alt}
                                src={dragon.src}
                            />
                            <div className="oldDragons-container-main-content">
                                <h3 className="oldDragons-container-main-content-h3 h3">{dragon.title}</h3>
                                <p className="oldDragons-container-main-content-text text">
                                    {dragon.subtitle}
                                </p>
                                <div className="oldDragons-container-main-content-tags">
                                    <span className="tag text">{dragon.tag1}</span>
                                    <span className="tag text">{dragon.tag2}</span>
                                    <span className="tag text">{dragon.tag3}</span>
                                </div>
                                <button className="oldDragons-container-main-content-button button3">
                                    Переглянути проект →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
                <button className="oldDragons-container-button button1">
                    Переглянути всі
                </button>
            </div>
        </section>
    );
};
