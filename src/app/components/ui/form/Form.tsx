import React from 'react';

interface FormProps {
    className?: string | string[];
    children?: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ className = '', children }) => {
    const classNames = Array.isArray(className) ? className.join(' ') : className;

    return (
        <form className={classNames}>
            {children}
        </form>
    );
};

export default Form;
