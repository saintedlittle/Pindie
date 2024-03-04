import React from 'react';

interface ContainerProps {
    className?: string | string[];
    children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = '', children }) => {
    // Обрабатываем переданные классы, если они массив
    const classNames = Array.isArray(className) ? className.join(' ') : className;

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default Container;
