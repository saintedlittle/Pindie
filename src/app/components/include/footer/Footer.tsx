// components/Footer.tsx
import React from 'react';

import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <a href="#" className="footer__logo">
                <span className="footer__logo-name">pindie</span>
                <span className="footer__logo-copy">, XXI век</span>
            </a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a href="" className="button social-list__link">YT</a>
                </li>
                <li className="social-list__item">
                    <a href="" className="button social-list__link">ВК</a>
                </li>
                <li className="social-list__item">
                    <a href="" className="button social-list__link">TG</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
