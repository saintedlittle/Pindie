import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Logo />
            <SocialList />
        </footer>
    );
};

const Logo = () => {
    return (
        <a href="#" className="footer__logo">
            <span className="footer__logo-name">pindie</span>
            <span className="footer__logo-copy">, XXI век</span>
        </a>
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
            <a href={link} className="button social-list__link">{text}</a>
        </li>
    );
};

export default Footer;
