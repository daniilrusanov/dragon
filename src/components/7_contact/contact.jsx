import './contact.css';
import React, {useEffect, useState} from "react";
import {fetchDragonsData} from '../../js/fetchDragonsData';

import imgContactMail from "../../svg/contactMail.svg";
import imgContactPhone from "../../svg/contactPhone.svg";
import imgContactGeo from "../../svg/contactGeo.svg";

export const Contact = () => {
    const [contact, setContact] = useState({});

    useEffect(() => {
        const getDragonsData = async () => {
            try {
                const data = await fetchDragonsData();
                const contactData = data.find(dragon => dragon.id === 16);
                setContact(contactData);
            } catch (error) {
                console.error('Error fetching dragons data:', error);
            }
        };

        getDragonsData();
    }, []);

    return (
        <section className="contact" id="contact">
            <div className="contact-columns">
                <div className="contact-left">
                    <h1 className="contact-left-h1 h1">{contact.title}</h1>
                    <span className="contact-left-text text">
                        {contact.subtitle}
                    </span>
                </div>
                <div className="contact-right">
                    <div className="contact-right-item">
                        <div className="contact-right-item-row1">
                            <img
                                className="contact-right-item-row-svg"
                                alt="Mail"
                                src={imgContactMail}
                            />
                            <h5 className="contact-right-item-row-h5 h5">{contact.title1}</h5>
                        </div>
                        <span className="contact-right-item-row-text text">
                            {contact.subtitle1}
                        </span>
                    </div>

                    <div className="contact-right-item">
                        <div className="contact-right-item-row1">
                            <img
                                className="contact-right-item-row-svg"
                                alt="Phone"
                                src={imgContactPhone}
                            />
                            <h5 className="contact-right-item-row-h5 h5">{contact.title2}</h5>
                        </div>
                        <span className="contact-right-item-row-text text">
                            {contact.subtitle2}
                        </span>
                    </div>

                    <div className="contact-right-item">
                        <div className="contact-right-item-row1">
                            <img
                                className="contact-right-item-row-svg"
                                alt="Geo"
                                src={imgContactGeo}
                            />
                            <h5 className="contact-right-item-row-h5 h5">{contact.title3}</h5>
                        </div>
                        <span className="contact-right-item-row-text text">
                            {contact.subtitle3}
                        </span>
                    </div>
                </div>
            </div>
            <div className="contact-img">
                <img
                    className="contact-img-photo img"
                    alt={contact.alt}
                    src={contact.img}
                />
            </div>
        </section>
    );
};
