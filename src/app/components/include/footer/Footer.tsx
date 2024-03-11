"use client"
import React from 'react';

import './Footer.css';
import {Anchor} from "@/app/components/ui/a/Anchor";
import Span from "@/app/components/ui/span/Span";
import {useRouter} from "next/navigation";

const Footer = () => {
    return (
        <footer className="footer">
            <Logo />
            <SocialList />
        </footer>
    );
};

const Logo = () => {
    const router = useRouter();

    const handleClick = () => {
        // Перенаправляем на главную страницу "/"
        router.push('/');
    };

    return (
        <Anchor href={"#"} className={"footer__logo"} onClick={handleClick}>
            <Span className={"footer__logo-name"}>pindie</Span>
            <Span className={"footer__logo-copy"}>, XXI век</Span>
        </Anchor>
    );
};

const SocialList = () => {
    return (
        <ul className="social-list">
            <SocialItem link="#" text="YT" />
            <SocialItem link="#" text="ВК" />
            <SocialItem link="#" text="TG" />
        </ul>
    );
};

interface SocialItemProps {
    link: string;
    text: string;
}

const SocialItem: React.FC<SocialItemProps> = ({ link, text }) => {
    return (
        <li className="social-list__item">
            <Anchor href={link} className={"button social-list__link"}>{text}</Anchor>
        </li>
    );
};

export default Footer;
