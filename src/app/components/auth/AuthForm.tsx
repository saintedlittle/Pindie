import React, { useState, useEffect } from 'react';
import './AuthForm.css';
import Button from "@/app/components/ui/button/Button";
import Container from "@/app/components/ui/div/Container";
import Form from "@/app/components/ui/form/Form";
import Title from "@/app/components/ui/title/Title";
import Label from "@/app/components/ui/label/Label";
import Span from "@/app/components/ui/span/Span";
import Input from "@/app/components/ui/input/Input";

interface FormFieldProps {
    title: string;
    type: string;
    placeholder: string;
}

const FormField: React.FC<FormFieldProps> = ({ title, type, placeholder }) => {
    return (
        <Label className={"form__field"}>
            <Span className={"form__field-title"}>{title}</Span>
            <Input className={"form__field-input"} placeholder={placeholder} />
        </Label>
    );
};

const AuthForm: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <Form className={"form"}>
            <Title className={"form__title"} level={2}>Авторизация</Title>
            <Container className={"form__fields"}>
                {isClient && (
                    <>
                        <FormField title="Email" type="email" placeholder="hello@world.com" />
                        <FormField title="Пароль" type="password" placeholder="***********" />
                    </>
                )}
            </Container>

            <Container className={"form__actions"}>
                <Button className={"form__reset"} type={"reset"} resetDefaultCSS={true}>Очистить</Button>
                <Button className={"form__submit"} type={"submit"} resetDefaultCSS={true}>Войти</Button>
            </Container>
        </Form>
    );
};

export default AuthForm;
