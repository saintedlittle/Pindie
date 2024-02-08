import React from 'react';
import './GameCard.css';

interface GameCardProps {
    title: string;
    description: string;
    author: string;
    votes: number;
    imageUrl: string;
}

const GameCardImage: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
    return <img src={imageUrl} alt="" className="card__image" />;
};

const GameCardInfo: React.FC<{ title: string; description: string; author: string; votes: number }> = ({title, description, author, votes}) => {
    return (
        <div className="card__content-block">
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{description}</p>
            <div className="card__info-container">
                <p className="card__author">
                    Автор: <span className="card__accent">{author}</span>
                </p>
                <p className="card__votes">
                    Голосов на сайте: <span className="card__accent">{votes}</span>
                </p>
            </div>
        </div>
    );
};

const GameCardLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    return (
        <a href={href} className="card-list__link">
            {children}
        </a>
    );
};


const GameCard: React.FC<GameCardProps> = ({ title, description, author, votes, imageUrl }) => {
    return (
        <li className="cards-list__item">
            <GameCardLink href="/game-id">
                <article className="card">
                    <GameCardImage imageUrl={imageUrl} />
                    <GameCardInfo title={title} description={description} author={author} votes={votes} />
                </article>
            </GameCardLink>
        </li>
    );
};

export default GameCard;
