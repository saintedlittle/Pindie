"use client";
import React, { useState, useEffect } from 'react';
import Banner from "@/app/components/banner/Banner";
import GamesList from "@/app/components/gamesList/GamesList";
import Popup from "@/app/components/popup/Popup";
import ErrorPage from "@/app/components/error/ErrorPage";
import Promo from "@/app/components/promo/Promo";
import Container from "@/app/components/ui/div/Container";

const API_URL: string = 'http://localhost:4000'; // Замените на ваш URL API

interface Game {
    title: string;
    description: string;
    author: string;
    votes: number;
    imageUrl: string;
}

interface HomeProps {
    popularGames: Game[];
    newGames: Game[];
    error: boolean;
    errorMessage: string;
}

const Home: React.FC<HomeProps> = ({ popularGames, newGames, error, errorMessage }) => {
    return (
        <main className="main">
            <Banner />
            <Container id={"popup-root"}></Container>
            {error ? (
                <Popup isOpen={true}><ErrorPage errorMessage={errorMessage} /></Popup> // Используем ErrorPage вместо Alert
            ) : (
                <>
                    <GamesList title="Популярное" games={popularGames} />
                    <GamesList title="Новинки" games={newGames} />
                    <Promo />
                </>
            )}
        </main>
    );
}

const useGameData = () => {
    const [popularGames, setPopularGames] = useState<Game[]>([]);
    const [newGames, setNewGames] = useState<Game[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        const fetchPopularGames = async (): Promise<void> => {
            try {
                const response = await fetch(`${API_URL}/api/getPopularGames`);
                if (!response.ok) {
                    setError(true);
                    setErrorMessage('Failed to fetch popular games!');
                    return;
                }
                const data: Game[] = await response.json();
                setPopularGames(data);
            } catch (error) {
                console.error(error);
                setError(true);
                setErrorMessage('An error occurred while fetching popular games!');
            }
        };

        const fetchNewGames = async (): Promise<void> => {
            try {
                const response = await fetch(`${API_URL}/api/getNewGames`);
                if (!response.ok) {
                    setError(true);
                    setErrorMessage('Failed to fetch new games!');
                    return;
                }
                const data: Game[] = await response.json();
                setNewGames(data);
            } catch (error) {
                console.error(error);
                setError(true);
                setErrorMessage('An error occurred while fetching new games!');
            }
        };

        fetchPopularGames().then(r => console.log(r));
        fetchNewGames().then(r => console.log(r));
    }, []);

    return { popularGames, newGames, error, errorMessage };
};

const HomePage: React.FC = () => {
    const { popularGames, newGames, error, errorMessage } = useGameData();
    return <Home popularGames={popularGames} newGames={newGames} error={error} errorMessage={errorMessage} />;
};

export default HomePage;
