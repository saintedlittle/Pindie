import React from 'react';
import './Banner.css';
import {Paragraph} from "@/app/components/ui/p/Paragraph";
import Container from "@/app/components/ui/div/Container";
import Title from "@/app/components/ui/title/Title";
import {Anchor} from "@/app/components/ui/a/Anchor";
import Section from "@/app/components/ui/section/Section";
import Image from "@/app/components/ui/img/Image";

const Banner = () => {
    return (
        <Section className={"banner"}>
            <BannerDescription />
            <BannerImage />
        </Section>
    );
};

const BannerDescription = () => {
    return (
        <Container className={"banner__description"}>
            <BannerTitle />
            <BannerTextBlock />
            <BannerLink />
        </Container>
    );
};

const BannerTitle = () => {
    return (
        <Title level={1} className={"banner__title"}>
            Портал инди-игр от&nbsp;студентов Яндекс Практикума
        </Title>
    );
};

const BannerTextBlock = () => {
    return (
        <Container className={"banner__text-block"}>
            <Paragraph className={"banner__text"}>
                Студенты курсов разрабатывают свои игры на Unity, здесь мы их
                публикуем. Вы можете играть прямо на сайте. А если у вас есть
                аккаунт пользователя — получаете возможность голосовать за игры.
            </Paragraph>
        </Container>
    );
};

const BannerLink = () => {
    return (
        <Anchor href={"#popular"} className={"button banner__link"}>
            Смотреть игры
        </Anchor>
    );
};

const BannerImage = () => {
    return (
        <Image
            src={"/images/banner-illustration.jpg"}
            alt={"Рука, утопленная в желтом фоне"}
            className={"banner__image"}
        />
    );
};
export default Banner;
