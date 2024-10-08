import React from 'react';

import {AppRouter} from './router/AppRouter.tsx';
import {NavBar} from './components/navbar/NavBar.tsx';

import './MovieStreamingApp.css';

export const MovieStreamingApp: React.FC = () => {

    return (
        <>
            <NavBar/>
            <AppRouter/>
        </>
    );

}
