import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner">
            <BannerDescription />
            <BannerImage />
        </section>
    );
};

const BannerDescription = () => {
    return (
        <div className="banner__description">
            <BannerTitle />
            <BannerTextBlock />
            <BannerLink />
        </div>
    );
};

const BannerTitle = () => {
    return (
        <h1 className="banner__title">
            Портал инди-игр от&nbsp;студентов Яндекс Практикума
        </h1>
    );
};

const BannerTextBlock = () => {
    return (
        <div className="banner__text-block">
            <p className="banner__text">
                Студенты курсов разрабатывают свои игры на Unity, здесь мы их
                публикуем. Вы можете играть прямо на сайте. А если у вас есть
                аккаунт пользователя — получаете возможность голосовать за игры.
            </p>
        </div>
    );
};

const BannerLink = () => {
    return (
        <a href="#popular" className="button banner__link">Смотреть игры</a>
    );
};

const BannerImage = () => {
    return (
        <img
            src="/images/banner-illustration.jpg"
            alt="Рука, утопленная в желтом фоне"
            className="banner__image"
        />
    );
};

export default Banner;
