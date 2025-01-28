import '../css/6_team.css';
import React from "react";

import imgTeam1 from "../img/S5_team1.jpeg";
import imgTeam2 from "../img/S5_team4.jpeg";
import imgTeam3 from "../img/S5_team3.jpeg";
import imgTeam4 from "../img/S5_team2.jpeg";


export const Team = () => {
    return (
        <section className="team">
            <div className="team-header">
                <h1 className="team-header-h2 h2">Наша команда</h1>
                <span className="team-header-text text">Ми - команда професіоналів, захоплених драконами.</span>
            </div>

            <div className="team-container">
                <div className="team-container-column-1">
                    <div className="team-container-column-upper">
                        <div className="team-container-column-left">
                            <img
                                className="team-container-column-left-img img"
                                alt="Placeholder"
                                src={imgTeam1}
                            />
                        </div>
                        <div className="team-container-column-right">
                            <h4 className="team-container-column-right-h4 h4">Русанов Данііл</h4>
                            <span className="team-container-column-right-text1 text">Керівник проєкту</span>
                            <span className="team-container-column-right-text2 text">З досвідом у сфері фентезі, Данііл веде команду до успіху.</span>
                            <div className="team-container-column-right-social">
                                <button className="team-container-column-right-social-linkedIn linkedIn">Facebook</button>
                                <button className="team-container-column-right-social-twitter Twitter">Instagram</button>
                                <button className="team-container-column-right-social-net net">Net</button>
                            </div>
                        </div>
                    </div>
                    <div className="team-container-column-lower">
                        <div className="team-container-column-left">
                            <img
                                className="team-container-column-left-img img"
                                alt="Placeholder"
                                src={imgTeam1}
                            />
                        </div>
                        <div className="team-container-column-right">
                            <h4 className="team-container-column-right-h4 h4">Русанов Данііл</h4>
                            <span className="team-container-column-right-text1 text">Розробник</span>
                            <span className="team-container-column-right-text2 text">Данііл відповідає за розробку сайту</span>
                            <div className="team-container-column-right-social">
                                <button className="team-container-column-right-social-linkedIn linkedIn">Facebook</button>
                                <button className="team-container-column-right-social-twitter Twitter">Instagram</button>
                                <button className="team-container-column-right-social-net net">Net</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-container-column-2">
                    <div className="team-container-column-upper">
                        <div className="team-container-column-left">
                            <img
                                className="team-container-column-left-img img"
                                alt="Placeholder"
                                src={imgTeam1}
                            />
                        </div>
                        <div className="team-container-column-right">
                            <h4 className="team-container-column-right-h4 h4">Русанов Данііл</h4>
                            <span className="team-container-column-right-text1 text">Дизайнер проєкту</span>
                            <span className="team-container-column-right-text2 text">Данііл створює візуальні концепції, які захоплюють і надихають.</span>
                            <div className="team-container-column-right-social">
                                <button className="team-container-column-right-social-linkedIn linkedIn">Facebook</button>
                                <button className="team-container-column-right-social-twitter Twitter">Instagram</button>
                                <button className="team-container-column-right-social-net net">Net</button>
                            </div>
                        </div>
                    </div>
                    <div className="team-container-column-lower">
                        <div className="team-container-column-left">
                            <img
                                className="team-container-column-left-img img"
                                alt="Placeholder"
                                src={imgTeam1}
                            />
                        </div>
                        <div className="team-container-column-right">
                            <h4 className="team-container-column-right-h4 h4">Твоє ім'я</h4>
                            <span className="team-container-column-right-text1 text">Маркетолог</span>
                            <span className="team-container-column-right-text2 text">Саме ти можеш замість керівника робити всю рутинну роботу!</span>
                            <div className="team-container-column-right-social">
                                <button className="team-container-column-right-social-linkedIn linkedIn">Facebook</button>
                                <button className="team-container-column-right-social-twitter Twitter">Instagram</button>
                                <button className="team-container-column-right-social-net net">Net</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-footer">
                <h3 className="team-footer-h3 h3">Ми наймаємо!</h3>
                <span className="team-footer-text text">Приєднуйтесь до нас для захоплюючих можливостей.</span>
                <button className="team-footer-button button1">Відкриті вакансії</button>
            </div>
        </section>
    );
};