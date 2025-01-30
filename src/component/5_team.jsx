import '../css/5_team.css';
import React, { useEffect, useState } from "react";
import { fetchDragonsData } from '../js/fetchDragonsData';

import imgTeamLinkedIn from "../svg/S5_teamLinkedIn.svg";
import imgTeamTwitter from "../svg/S5_teamTwitter.svg";
import imgTeamNet from "../svg/S5_teamNet.svg";

export const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const getDragonsData = async () => {
            try {
                const data = await fetchDragonsData();
                setTeamMembers(data.filter(dragon => dragon.id >= 9 && dragon.id <= 12));
            } catch (error) {
                console.error('Error fetching dragons data:', error);
            }
        };

        getDragonsData();
    }, []);

    return (
        <section className="team" id="team">
            <div className="team-header">
                <h2 className="team-header-h2 h2">Наша команда</h2>
                <span className="team-header-text text">Ми - команда професіоналів, захоплених драконами.</span>
            </div>

            <div className="team-container">
                {teamMembers.map(member => (
                    <div key={member.id} className="team-container-column">
                        <div className="team-container-card">
                            <img
                                className="team-container-card-img img"
                                alt={member.alt}
                                src={member.img}
                            />
                            <div className="team-container-card-content">
                                <h4 className="team-container-card-h4 h4">{member.title}</h4>
                                <div className="team-container-card-text1 text">{member.subtitle}</div>
                                <div className="team-container-card-text2 text">{member.text}</div>
                                <div className="team-container-card-social">
                                    <img
                                        className="team-container-card-social-linkedIn linkedIn"
                                        alt="LinkedIn"
                                        src={imgTeamLinkedIn}
                                    />
                                    <img
                                        className="team-container-card-social-twitter Twitter"
                                        alt="Twitter"
                                        src={imgTeamTwitter}
                                    />
                                    <img
                                        className="team-container-card-social-net net"
                                        alt="Net"
                                        src={imgTeamNet}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="team-footer">
                <h3 className="team-footer-h3 h3">Ми наймаємо!</h3>
                <div className="team-footer-text text">Приєднуйтесь до нас для захоплюючих можливостей.</div>
                <button className="team-footer-button button1">Відкриті вакансії</button>
            </div>
        </section>
    );
};
