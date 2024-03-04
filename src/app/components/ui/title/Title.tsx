import React from 'react';

interface TitleProps {
    level?: number;
    className?: string | string[];
    children?: React.ReactNode;
    id?: string;
}

const Title: React.FC<TitleProps> = ({ level = 1, className = '', children , id = ''}) => {
    const classNames = Array.isArray(className) ? className.join(' ') : className;
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={classNames} id={''}>
            {children}
        </Tag>
    );
};

export default Title;
