// components/Promo.js
import React from 'react';

import './Promo.css';

const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__description-block">
                <PromoTitle />
                <PromoDescription />
                <PromoButton />
            </div>
            <PromoImage />
        </section>
    );
};

const PromoTitle = () => {
    return (
        <h2 className="promo__title">Твой промо-код</h2>
    );
};

const PromoDescription = () => {
    return (
        <p className="promo__description">Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
    );
};

const PromoButton = () => {
    return (
        <button className="button promo__button">Получить код</button>
    );
};

const PromoImage = () => {
    return (
        <img src="/images/promo-illustration.svg" alt="Собака" className="promo__image" />
    );
};

export default Promo;

