import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../pages/LoginPage.tsx';
import {MoviesRouter} from './MoviesRouter.tsx';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route path='/*' element={<MoviesRouter />}/>
            </Routes>
        </>
    );
};
