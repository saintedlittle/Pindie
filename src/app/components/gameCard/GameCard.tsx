import React from 'react';
import './GameCard.css';

interface GameCardProps {
    title: string;
    description: string;
    author: string;
    votes: number;
    imageUrl: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, author, votes, imageUrl }) => {
    return (
        <li className="cards-list__item">
            <a href="/game-id" className="card-list__link">
                <article className="card">
                    <img
                        src={imageUrl}
                        alt=""
                        className="card__image"
                    />
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
                </article>
            </a>
        </li>
    );
};

export default GameCard;
