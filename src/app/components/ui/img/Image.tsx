import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
    className?: string | string[];
}

const Image: React.FC<ImageProps> = ({ src, alt, className = '' }) => {
    const classNames = Array.isArray(className) ? className.join(' ') : className;

    return (
        <img src={src} alt={alt} className={classNames} />
    );
};

export default Image;
