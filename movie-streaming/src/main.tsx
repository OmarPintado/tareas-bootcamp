import React from 'react';
import ReactDOM from 'react-dom/client';
import {MovieStreamingApp} from './MovieStreamingApp.tsx';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MovieStreamingApp />
    </React.StrictMode>
);
