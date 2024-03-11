// components/Promo.js
import React from 'react';

import './Promo.css';
import Section from "@/app/components/ui/section/Section";
import Container from "@/app/components/ui/div/Container";
import Title from "@/app/components/ui/title/Title";
import {Paragraph} from "@/app/components/ui/p/Paragraph";
import Button from "@/app/components/ui/button/Button";
import Image from "@/app/components/ui/img/Image";

const Promo = () => {
    return (
        <Section className={"promo"}>
            <Container className={"promo__description-block"}>
                <PromoTitle />
                <PromoDescription />
                <PromoButton />
            </Container>
            <PromoImage />
        </Section>
    );
};

const PromoTitle = () => {
    return (
        <Title level={2} className={"promo__title"}>Твой промо-код</Title>
    );
};

const PromoDescription = () => {
    return (
        <Paragraph className={"promo__description"}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</Paragraph>
    );
};

const PromoButton = () => {
    return (
        <Button className={"button promo__button"}>Получить код</Button>
    );
};

const PromoImage = () => {
    return (
        <Image src={"/images/promo-illustration.svg"} alt={"Собака"} className={"promo__image"} />
    );
};

export default Promo;

