import React from 'react';
import {NavBar} from './components/navbar/NavBar.tsx';
import {MovieBanner} from './components/movieBanner/MovieBanner.tsx';
import {RecentlyUpdated} from './components/recentlyUpdated/RecentlyUpdated.tsx';
import {Trending} from './components/trending/Trending.tsx';
import './MovieStreamingApp.css';

export const MovieStreamingApp: React.FC = () => {

    return (
        <>
            <div className='main'>
                <NavBar/>
                <MovieBanner/>
            </div>
            <RecentlyUpdated/>
            <Trending/>
            <div>Section 2</div>
            <div>Section 3</div>
            <div>Section 4</div>
        </>
    );

}
