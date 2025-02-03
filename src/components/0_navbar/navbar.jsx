import './navbar.css';
import React, {useState, useEffect} from "react";
import logo from "../../svg/logo.svg";

export const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 610);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 610);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className={`navbar-container ${isMobile ? 'hidden' : ''}`}>
                <div className="navbar-container-content">
                    <img
                        className="navbar-logo logo"
                        alt="Column"
                        src={logo}
                    />

                    <div className="navbar-container-content-text">
                        <div className="navbar-container-content-text-links">
                            <a href="#header" className="link-text">
                                <span className="link-text-2">Вгору</span>
                            </a>
                            <a href="#oldDragons" className="link-text">
                                <span className="link-text-2">Старейшини</span>
                            </a>
                            <a href="#legend" className="link-text">
                                <span className="link-text-2">Легенда</span>
                            </a>
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="drop-button">Навігація &#9660;</button>
                                {dropdownOpen && (
                                    <div className="dropdown-content">
                                        <a href="#abilities" className="link-text">Здібності</a>
                                        <a href="#team" className="link-text">Команда</a>
                                        <a href="#testimonials" className="link-text">Відгуки</a>
                                        <a href="#contact" className="link-text">Контакти</a>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="navbar-container-content-text-buttons">
                            <button className="navbar-container-content-text-buttons-1 button1">Відгук</button>
                            <button className="navbar-container-content-text-buttons-2 button2">Приєднатися</button>
                        </div>
                    </div>
                </div>
            </div>
            {isMobile && (
                <button className="burger-menu" onClick={toggleModal}>
                    &#9776;
                </button>
            )}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img className="navbar-logo logo" alt="Column" src={logo}/>
                            <button className="close-button" onClick={toggleModal}>&times;</button>
                        </div>
                        <div className="modal-middle-section"></div>
                        <div className="modal-links">
                            <a href="#header" className="link-text">Вгору</a>
                            <a href="#oldDragons" className="link-text">Старейшини</a>
                            <a href="#legend" className="link-text">Легенда</a>
                            <a href="#abilities" className="link-text">Здібності</a>
                            <a href="#team" className="link-text">Команда</a>
                            <a href="#testimonials" className="link-text">Відгуки</a>
                            <a href="#contact" className="link-text">Контакти</a>
                        </div>
                        <div className="modal-buttons">
                            <button className="button1">Відгук</button>
                            <button className="button2">Приєднатися</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
