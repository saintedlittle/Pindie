"use client"
import React, {useState} from 'react';

import './Header.css';
import Popup from "@/app/components/popup/Popup";
import AuthForm from "@/app/components/auth/AuthForm";
import {useRouter} from "next/navigation";
import {Anchor} from "@/app/components/ui/a/Anchor";
import Image from "@/app/components/ui/img/Image";
import Button from "@/app/components/ui/button/Button";
import Container from "@/app/components/ui/div/Container";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
        </header>
    );
};

const Logo = () => {
    const router = useRouter();

    const handleClick = () => {
        // Перенаправляем на главную страницу "/"
        router.push('/');
    };

    return (
        <Anchor href={"#"} className={"logo"} onClick={handleClick}>
            <Image className={"logo__image"} src={"/images/logo.svg"} alt={"Логотип Pindie"} />
        </Anchor>
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
            <Anchor href={link} className={"menu__link"}>{text}</Anchor>
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
        <Container className={"auth"}>
            <button className={"auth__button"} onClick={handleLoginButtonClick}>Войти</button>
            {isPopupOpen && (
                <Popup onClose={handleClosePopup} isOpen={true}>
                    <div style={{margin: '32px auto', maxWidth: '768px', padding: '32px'}}>
                        <AuthForm />
                    </div>
                </Popup>
            )}
        </Container>
    );
};
export default Header;
