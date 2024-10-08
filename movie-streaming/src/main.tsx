import React from 'react';
import ReactDOM from 'react-dom/client';
import {MovieStreamingApp} from './MovieStreamingApp.tsx';

import './styles.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <MovieStreamingApp />
        </BrowserRouter>
    </React.StrictMode>
);
