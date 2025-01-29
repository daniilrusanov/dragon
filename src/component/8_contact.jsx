import '../css/8_contact.css';
import React from "react";

import imgContact from "../img/S7_contacts.jpeg";
import imgContactMail from "../img/svg/S7_contactMail.svg";
import imgContactPhone from "../img/svg/S7_contactPhone.svg";
import imgContactGeo from "../img/svg/S7_contactGeo.svg";

export const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-columns" id="contact">
                <div className="contact-left">
                    <h1 className="contact-left-h1 h1">Зв'яжіться з нами</h1>
                    <span className="contact-left-text text">
                        Ми завжди раді відповісти на ваші запитання. Зв'яжіться з нами будь-яким зручним способом.
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
                            <h5 className="contact-right-item-row-h5 h5">Електронна пошта</h5>
                        </div>
                        <span className="contact-right-item-row-text text">
                            daniil12099@gmail.com
                        </span>
                    </div>

                    <div className="contact-right-item">
                        <div className="contact-right-item-row1">
                            <img
                                className="contact-right-item-row-svg"
                                alt="Phone"
                                src={imgContactPhone}
                            />
                            <h5 className="contact-right-item-row-h5 h5">Телефон</h5>
                        </div>
                        <span className="contact-right-item-row-text text">
                            +38 (093) 000-0000
                        </span>
                    </div>

                    <div className="contact-right-item">
                        <div className="contact-right-item-row1">
                            <img
                                className="contact-right-item-row-svg"
                                alt="Geo"
                                src={imgContactGeo}
                            />
                            <h5 className="contact-right-item-row-h5 h5">Офіс</h5>
                        </div>
                        <span className="contact-right-item-row-text text">
                            Вулиця Шевченка, 12, Київ, 0000, Україна
                        </span>
                    </div>
                </div>
            </div>
            <div className="contact-img">
                <img
                    className="contact-img-photo img"
                    alt="Contact"
                    src={imgContact}
                />
            </div>
        </section>
    );
};