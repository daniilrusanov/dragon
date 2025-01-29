import '../css/6_team.css';
import React from "react";

import imgTeam1 from "../img/S5_team1.jpeg";
import imgTeam2 from "../img/S5_team4.jpeg";
import imgTeam3 from "../img/S5_team3.jpeg";
import imgTeam4 from "../img/S5_team2.jpeg";

import imgTeamLinkedIm from "../img/svg/S5_teamLinkedIn.svg";
import imgTeamTwitter from "../img/svg/S5_teamTwitter.svg";
import imgTeamNet from "../img/svg/S5_teamNet.svg";

export const Team = () => {
    return (
        <section className="team" id="team">
            <div className="team-header">
                <h2 className="team-header-h2 h2">Наша команда</h2>
                <span className="team-header-text text">Ми - команда професіоналів, захоплених драконами.</span>
            </div>

            <div className="team-container">
                <div className="team-container-column">
                    <div className="team-container-card">
                        <img
                            className="team-container-card-img img"
                            alt="Placeholder"
                            src={imgTeam1}
                        />
                        <div className="team-container-card-content">
                            <h4 className="team-container-card-h4 h4">Русанов Данііл</h4>
                            <div className="team-container-card-text1 text">Керівник проєкту</div>
                            <div className="team-container-card-text2 text">З досвідом у сфері фентезі, Данііл веде команду до успіху.</div>
                            <div className="team-container-card-social">
                                <img
                                    className="team-container-card-social-linkedIn linkedIn"
                                    alt="Placeholder"
                                    src={imgTeamLinkedIm}
                                />
                                <img
                                    className="team-container-card-social-twitter Twitter"
                                    alt="Placeholder"
                                    src={imgTeamTwitter}
                                />
                                <img
                                    className="team-container-card-social-net ne"
                                    alt="Placeholder"
                                    src={imgTeamNet}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="team-container-card">
                        <img
                            className="team-container-card-img img"
                            alt="Placeholder"
                            src={imgTeam2}
                        />
                        <div className="team-container-card-content">
                            <h4 className="team-container-card-h4 h4">Русанов Данііл</h4>
                            <div className="team-container-card-text1 text">Розробник</div>
                            <div className="team-container-card-text2 text">Данііл відповідає за розробку сайту</div>
                            <div className="team-container-card-social">
                                <img
                                    className="team-container-card-social-linkedIn linkedIn"
                                    alt="Placeholder"
                                    src={imgTeamLinkedIm}
                                />
                                <img
                                    className="team-container-card-social-twitter Twitter"
                                    alt="Placeholder"
                                    src={imgTeamTwitter}
                                />
                                <img
                                    className="team-container-card-social-net ne"
                                    alt="Placeholder"
                                    src={imgTeamNet}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-container-column">
                    <div className="team-container-card">
                        <img
                            className="team-container-card-img img"
                            alt="Placeholder"
                            src={imgTeam3}
                        />
                        <div className="team-container-card-content">
                            <h4 className="team-container-card-h4 h4">Русанов Данііл</h4>
                            <div className="team-container-card-text1 text">Дизайнер проєкту</div>
                            <div className="team-container-card-text2 text">Данііл створює візуальні концепції, які захоплюють і надихають.</div>
                            <div className="team-container-card-social">
                                <img
                                    className="team-container-card-social-linkedIn linkedIn"
                                    alt="Placeholder"
                                    src={imgTeamLinkedIm}
                                />
                                <img
                                    className="team-container-card-social-twitter Twitter"
                                    alt="Placeholder"
                                    src={imgTeamTwitter}
                                />
                                <img
                                    className="team-container-card-social-net ne"
                                    alt="Placeholder"
                                    src={imgTeamNet}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="team-container-card">
                        <img
                            className="team-container-card-img img"
                            alt="Placeholder"
                            src={imgTeam4}
                        />
                        <div className="team-container-card-content">
                            <h4 className="team-container-card-h4 h4">Твоє ім'я</h4>
                            <div className="team-container-card-text1 text">Маркетолог</div>
                            <div className="team-container-card-text2 text">Саме ти можеш замість керівника робити всю рутинну роботу!</div>
                            <div className="team-container-card-social">
                                <img
                                    className="team-container-card-social-linkedIn linkedIn"
                                    alt="Placeholder"
                                    src={imgTeamLinkedIm}
                                />
                                <img
                                    className="team-container-card-social-twitter Twitter"
                                    alt="Placeholder"
                                    src={imgTeamTwitter}
                                />
                                <img
                                    className="team-container-card-social-net ne"
                                    alt="Placeholder"
                                    src={imgTeamNet}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-footer">
                    <h3 className="team-footer-h3 h3">Ми наймаємо!</h3>
                    <div className="team-footer-text text">Приєднуйтесь до нас для захоплюючих можливостей.</div>
                    <button className="team-footer-button button1">Відкриті вакансії</button>
                </div>
            </div>
        </section>
    );
};