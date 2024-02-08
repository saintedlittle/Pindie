import React from 'react';
import GameCard from '@/app/components/gameCard/GameCard';

import './GamesList.css';

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
        <section className="list-section">
            <h2 className="list-section__title" id={title.toLowerCase()}>
                {title}
            </h2>
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
        </section>
    );
};

export default GamesList;
