import React from 'react';
import './Button.css';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    resetDefaultCSS?: boolean; // Добавляем новый параметр
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', type = "button", resetDefaultCSS = false }) => {
    const handleClick = async () => {
        // Здесь можно выполнить какие-либо асинхронные операции
        // Например, запрос к серверу
        console.log('Button clicked');
    };

    // Формируем классы кнопки, включая условие для сброса стандартных стилей
    const buttonClasses = resetDefaultCSS ? className : `button ${className}`.trim();

    return (
        <button
            onClick={onClick || handleClick}
            className={buttonClasses}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
