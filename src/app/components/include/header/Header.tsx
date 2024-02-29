"use client"
import React, {useState} from 'react';

import './Header.css';
import Popup from "@/app/components/popup/Popup";
import AuthForm from "@/app/components/auth/AuthForm";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
        </header>
    );
};

const Logo = () => {
    return (
        <a href="#" className="logo">
            <img className="logo__image" src="/images/logo.svg" alt="Логотип Pindie" />
        </a>
    );
};

const Navigation = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <MenuItem link="#" text="Новинки" />
                <MenuItem link="#" text="Популярные" />
                <MenuItem link="#" text="Шутеры" />
                <MenuItem link="#" text="Ранеры" />
                <MenuItem link="#" text="Пиксельные" />
                <MenuItem link="#" text="TDS" />
            </ul>
            <Authentication />
        </nav>
    );
};

interface MenuItemProps {
    link: string;
    text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ link, text }) => {
    return (
        <li className="menu__item">
            <a href={link} className="menu__link">{text}</a>
        </li>
    );
};

const Authentication = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleLoginButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="auth">
            <button className="auth__button" onClick={handleLoginButtonClick}>Войти</button>
            {isPopupOpen && (
                <Popup onClose={handleClosePopup} isOpen={true}>
                    <AuthForm />
                </Popup>
            )}
        </div>
    );
};
export default Header;
