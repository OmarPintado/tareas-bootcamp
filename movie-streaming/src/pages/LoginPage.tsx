import React from 'react';
import {NavigateFunction, useNavigate} from 'react-router-dom';
import './LoginPage.css';

export const LoginPage: React.FC = () => {

    const navigate: NavigateFunction = useNavigate();
    const onLogin = () => {
        navigate('/', {
            replace: true,
        });
    }

    return (
        <>
            <h2>Login</h2>
            <button onClick={onLogin} className="login__button">
                Login
            </button>
        </>
    );
};
