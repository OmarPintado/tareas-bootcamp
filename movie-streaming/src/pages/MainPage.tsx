import React from 'react';

import {useFetchMovies} from '../hooks/useFetchMovies.tsx';
import {MovieBanner} from '../components/movieBanner/MovieBanner.tsx';
import {RecentlyUpdated} from '../components/recentlyUpdated/RecentlyUpdated.tsx';
import {Trending} from '../components/trending/Trending.tsx';
import {Section} from '../components/section/Section.tsx';

import './MainPage.css';

export const MainPage: React.FC = () => {
    const {data: newMoviesRelease} = useFetchMovies('https://api.themoviedb.org/3/trending/movie/day')
    const {data: newTVRelease} = useFetchMovies('https://api.themoviedb.org/3/trending/tv/day')

    return (
        <>
            <div className='main'>
                <MovieBanner/>
            </div>
            <RecentlyUpdated/>
            <Trending/>
            <Section title='New Release - Movies' movies={newMoviesRelease}/>
            <Section title='New Release - Series' movies={newTVRelease}/>
        </>
    );
};
