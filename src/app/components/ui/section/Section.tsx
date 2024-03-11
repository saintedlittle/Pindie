import React from 'react';

interface SectionProps {
    className?: string | string[];
    children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ className = '', children }) => {
    const classNames = Array.isArray(className) ? className.join(' ') : className;

    return (
        <section className={classNames}>
            {children}
        </section>
    );
};

export default Section;
