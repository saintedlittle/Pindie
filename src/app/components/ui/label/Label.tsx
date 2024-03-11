import React from 'react';

interface LabelProps {
    className?: string | string[];
    htmlFor?: string;
    children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ className = '', htmlFor, children }) => {
    const classNames = Array.isArray(className) ? className.join(' ') : className;

    return (
        <label className={classNames} htmlFor={htmlFor}>
            {children}
        </label>
    );
};

export default Label;
