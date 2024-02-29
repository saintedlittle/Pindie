import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';

import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PopupProps {
    isOpen: boolean;
    onClose?: () => void; // Новый пропс для пользовательской функции закрытия
    children?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
    const [isOpenState, setIsOpenState] = useState(isOpen);

    useEffect(() => {
        document.body.style.overflow = isOpenState ? 'hidden' : 'auto'; // Блокировать скролл страницы, если popup открыт
        return () => {
            document.body.style.overflow = 'auto'; // Восстановить скролл при закрытии popup
        };
    }, [isOpenState]);

    const handleClose = () => {
        setIsOpenState(false);
        if (onClose) {
            onClose(); // Вызываем пользовательскую функцию закрытия, если она передана
        }
    };

    if (!isOpenState) return null;

    return ReactDOM.createPortal(
        <>
            <div className="overlay" onClick={handleClose}></div>
            <div className="popup">
                <button className="close-button" onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className="popup-content">{children}</div>
            </div>
        </>,
        document.getElementById('popup-root')!
    );
};

export default Popup;
