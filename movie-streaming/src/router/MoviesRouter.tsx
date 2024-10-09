import {Navigate, Route, Routes} from 'react-router-dom';
import {MainPage} from '../pages/MainPage.tsx';
import {GenrePage} from '../pages/GenrePage.tsx';
import {MoviesPage} from '../pages/MoviesPage.tsx';
import {CountryPage} from '../pages/CountryPage.tsx';
import {SeriesPage} from '../pages/SeriesPage.tsx';
import {AnimationPage} from '../pages/AnimationPage.tsx';
import {NavBar} from '../components/navbar/NavBar.tsx';

export const MoviesRouter = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='' element={<MainPage />} />
                <Route path='genre' element={<GenrePage />} />
                <Route path='movies' element={<MoviesPage />} />
                <Route path='country' element={<CountryPage />} />
                <Route path='series' element={<SeriesPage />} />
                <Route path='animation' element={<AnimationPage />} />
                <Route path='/' element={<Navigate to='' />} />
                <Route path='*' element={<Navigate to='' />} />
            </Routes>
        </>
    );
};
