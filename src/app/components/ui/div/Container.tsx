import React from 'react';

interface ContainerProps {
    className?: string | string[];
    children?: React.ReactNode;
    id?: string
}

const Container: React.FC<ContainerProps> = ({ className = '', children, id = ''}) => {
    // Обрабатываем переданные классы, если они массив
    const classNames = Array.isArray(className) ? className.join(' ') : className;

    return (
        <div className={classNames} id={id}>
            {children}
        </div>
    );
};

export default Container;
