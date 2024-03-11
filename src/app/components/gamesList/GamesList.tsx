import React from 'react';
import GameCard from '@/app/components/gameCard/GameCard';

import './GamesList.css';
import Section from "@/app/components/ui/section/Section";
import Title from "@/app/components/ui/title/Title";

interface Game {
    title: string;
    description: string;
    author: string;
    votes: number;
    imageUrl: string;
}

interface GamesListProps {
    title: string;
    games: Game[];
}

const GamesList: React.FC<GamesListProps> = ({ title, games }) => {
    return (
        <Section className={"list-section"}>
            <Title level={2} className={"list-section__title"} id={title.toLowerCase()}>
                {title}
            </Title>
            <ul className="cards-list">
                {games.map((game, index) => (
                    <GameCard
                        key={index}
                        title={game.title}
                        description={game.description}
                        author={game.author}
                        votes={game.votes}
                        imageUrl={game.imageUrl}
                    />
                ))}
            </ul>
        </Section>
    );
};

export default GamesList;
