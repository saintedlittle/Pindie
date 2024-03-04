"use client"
import React from 'react';
import { Typography, Container } from '@mui/material';

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
                alignItems: 'center',
                margin: '20px auto',
                maxWidth: '768px',
                padding: '20px',
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
