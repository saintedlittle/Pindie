import React from "react";

export const Paragraph: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({ className = '', children }) => {
    const classNames = Array.isArray(className) ? className.join(' ') : className;

    return (
        <p className={classNames}>
            {children}
        </p>
    );
};