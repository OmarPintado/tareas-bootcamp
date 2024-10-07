import React from 'react';
import {NavBar} from './components/navbar/NavBar.tsx';
import {MovieBanner} from './components/movieBanner/MovieBanner.tsx';
import {RecentlyUpdated} from './components/recentlyUpdated/RecentlyUpdated.tsx';
import {Trending} from './components/trending/Trending.tsx';
import './MovieStreamingApp.css';
import {Section} from './components/section/Section.tsx';
import {useFetchMovies} from './hooks/useFetchMovies.tsx';

export const MovieStreamingApp: React.FC = () => {
    const {data: newMoviesRelease} = useFetchMovies('https://api.themoviedb.org/3/trending/movie/day')
    const {data: newTVRelease} = useFetchMovies('https://api.themoviedb.org/3/trending/tv/day')

    return (
        <>
            <div className='main'>
                <NavBar/>
                <MovieBanner/>
            </div>
            <RecentlyUpdated/>
            <Trending/>
            <Section title='New Release - Movies' movies={newMoviesRelease}/>
            <Section title='New Release - Series' movies={newTVRelease}/>
        </>
    );

}
