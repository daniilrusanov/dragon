import './header.css';
import React, { useEffect, useState } from "react";
import { fetchDragonsData } from '../../js/fetchDragonsData';

export const Header = () => {
    const [headerImages, setHeaderImages] = useState([]);

    useEffect(() => {
        const getDragonsData = async () => {
            try {
                const data = await fetchDragonsData();
                setHeaderImages(data.filter(dragon => dragon.id <= 4));
            } catch (error) {
                console.error('Error fetching dragons data:', error);
            }
        };

        getDragonsData();
    }, []);

    return (
        <header className="header" id="header">
            <div className="header-container">
                <div className="header-container-column-1">
                    <h1 className="header-container-h1 h1">
                        Ласкаво просимо у світ літніх драконів!
                    </h1>
                    <p className="header-container-text text">
                        Відкрийте для себе магію стародавніх драконів, які літають над
                        нашими головами. Приготуйтеся до незабутніх пригод та захоплюючих
                        історій!
                    </p>
                    <div className="header-container-buttons">
                        <button className="header-container-buttons-1 button1">Приєднатися</button>
                        <button className="header-container-buttons-2 button2">Зв'язатися</button>
                    </div>
                </div>
                <div className="header-container-column-2">
                    <div className="header-container-column-2_1">
                        {headerImages.slice(0, 2).map((dragon) => (
                            <img
                                key={dragon.id}
                                className="header-container-image img"
                                alt={dragon.alt}
                                src={dragon.src}
                            />
                        ))}
                    </div>
                    <div className="header-container-column-2_2">
                        {headerImages.slice(2, 4).map((dragon) => (
                            <img
                                key={dragon.id}
                                className="header-container-image img"
                                alt={dragon.alt}
                                src={dragon.src}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};
