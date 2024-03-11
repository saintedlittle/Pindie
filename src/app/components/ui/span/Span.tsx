import React from 'react';

interface SpanProps {
    className?: string | string[];
    children?: React.ReactNode;
}

const Span: React.FC<SpanProps> = ({ className = '', children }) => {
    const classNames = Array.isArray(className) ? className.join(' ') : className;

    return (
        <span className={classNames}>
            {children}
        </span>
    );
};

export default Span;
