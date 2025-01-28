import '../css/8_contact.css';
import React from "react";

import imgContact from "../img/S7_contacts.jpeg";

export const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-left">
                <h2 className="contact-left-h2 h2">Зв'яжіться з нами</h2>
                <span className={"contact-left-text text"}>
                    Ми завжди раді відповісти на ваші запитання. Зв'яжіться з нами будь-яким зручним способом.
                </span>
            </div>
            <div className="contact-right">
                <div className="contact-right-item">
                    <div className="contact-right-item-row1">
                        <img
                            className="contact-right-item-row-svg"
                            alt="Column"
                            src={imgContactMail}
                        />
                        <h4 className="contact-right-item-row-h4 h4">Електронна пошта</h4>
                    </div>
                    <div className="contact-right-item-row2">
                        <span className="contact-right-item-row-text text">
                            daniil12099@gmail.com
                        </span>
                    </div>
                </div>

                <div className="contact-right-item">
                    <div className="contact-right-item-row1">
                        <img
                            className="contact-right-item-row-svg"
                            alt="Column"
                            src={imgContactPhone}
                        />
                        <h4 className="contact-right-item-row-h4 h4">Телефон</h4>
                    </div>
                    <div className="contact-right-item-row2">
                        <span className="contact-right-item-row-text text">
                            +38 (093) 000-0000
                        </span>
                    </div>
                </div>

                <div className="contact-right-item">
                    <div className="contact-right-item-row1">
                        <img
                            className="contact-right-item-row-svg"
                            alt="Column"
                            src={imgContactGeo}
                        />
                        <h4 className="contact-right-item-row-h4 h4">Офіс</h4>
                    </div>
                    <div className="contact-right-item-row2">
                        <span className="contact-right-item-row-text text">
                            Вулиця Шевченка, 12, Київ, 0000, Україна
                        </span>
                    </div>
                </div>
            </div>
            <div className="contact-img">
                <img
                    className="contact-img-photo img"
                    alt="Column"
                    src={imgContact}
                />
            </div>
        </section>
    );
};