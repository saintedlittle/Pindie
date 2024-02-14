import React from 'react';

interface AlertProps {
    isError: boolean;
}

const Alert: React.FC<AlertProps> = ({ isError }) => {
    return (
        <div className={`alert ${isError ? "error" : "success"}`}>
            <h3>{isError ? "Проблемка" : "Успешно"}</h3>
            <p>{isError ? "Кажется, что-то пошло не так!" : "Всё просто замечательно!"}</p>
        </div>
    );
};

export default Alert;
