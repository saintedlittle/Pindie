import React from 'react';
import './AuthForm.css';

const AuthForm: React.FC = () => {
    return (
        <form className="form">
            <h2 className="form__title">Авторизация</h2>
            <div className="form__fields">
                <label className="form__field">
                    <span className="form__field-title">Email</span>
                    <input className="form__field-input" type="email" placeholder="hello@world.com"/>
                </label>
                <label className="form__field">
                    <span className="form__field-title">Пароль</span>
                    <input className="form__field-input" type="password" placeholder='***********'/>
                </label>
            </div>
            <div className="form__actions">
                <button className="form__reset" type="reset">Очистить</button>
                <button className="form__submit" type="submit">Войти</button>
            </div>
        </form>
    )
};

export default AuthForm;
