import React from 'react';

interface InputProps {
    className?: string | string[];
    type?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ className = '', type = 'text', placeholder }) => {
    const classNames = Array.isArray(className) ? className.join(' ') : className;

    return (
        <input className={classNames} type={type} placeholder={placeholder} />
    );
};

export default Input;
