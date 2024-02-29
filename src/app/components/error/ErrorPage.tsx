"use client"
import React, {useState} from 'react';
import { Typography, Container } from '@mui/material';
import Popup from "@/app/components/popup/Popup";

interface ErrorPageProps {
    errorMessage: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
    return (
        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography variant="h4" gutterBottom>
                Ошибка!
            </Typography>
            <Typography variant="body1" gutterBottom>
                {errorMessage}
            </Typography>

        </Container>
    );
};

export default ErrorPage;
