import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';

import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from "@/app/components/ui/div/Container";
import Button from "@/app/components/ui/button/Button";

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
            <Container className={"popup"}>
                <Button className={"close-button"} onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </Button>
                <Container className={"popup-content"}>{children}</Container>
            </Container>
        </>,
        document.getElementById('popup-root')!
    );
};

export default Popup;
