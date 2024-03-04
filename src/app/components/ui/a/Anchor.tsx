import React from "react";

export const Anchor: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className = '', children, ...rest }) => {
    const classNames = Array.isArray(className) ? className.join(' ') : className;

    return (
        <a className={classNames} {...rest}>
            {children}
        </a>
    );
};