"use client"
import React, { useState, useEffect } from 'react';
import Promo from "@/app/components/promo/Promo";
import Banner from "@/app/components/banner/Banner";
import GamesList from "@/app/components/gamesList/GamesList";
import ErrorPage from "@/app/components/error/ErrorPage";
import Popup from "@/app/components/popup/Popup";

const API_URL: string = 'http://localhost:4000'; // Замените на ваш URL API

interface Game {
    title: string;
    description: string;
    author: string;
    votes: number;
    imageUrl: string;
}

export default function Home(): React.JSX.Element {
    const [popularGames, setPopularGames] = useState<Game[]>([]);
    const [newGames, setNewGames] = useState<Game[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        fetchPopularGames().then(r => console.log(r));
        fetchNewGames().then(r => console.log(r));
    }, []);

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

    return (
        <main className="main">
            <Banner />
            <div id="popup-root"></div>
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
