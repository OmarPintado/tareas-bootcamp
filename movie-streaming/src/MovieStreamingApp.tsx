import React from 'react';
import {NavBar} from './components/navbar/NavBar.tsx';
import {MovieBanner} from './components/movieBanner/MovieBanner.tsx';

export const MovieStreamingApp: React.FC = () => {

    return (
        <div>
            <NavBar/>
            <MovieBanner/>
            <div>Recently Updated</div>
            <div>Section 1</div>
            <div>Section 2</div>
            <div>Section 3</div>
            <div>Section 4</div>
        </div>
    );

}
