import './MovieBanner.css';
import {useFetchMovies} from '../../hooks/useFetchMovies.tsx';
import {useEffect, useState} from 'react';

const baseUrlImage: string = 'https://image.tmdb.org/t/p/';

export const MovieBanner = () => {

    const {data: movies} = useFetchMovies('https://api.themoviedb.org/3/movie/popular');
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [watchStatus, setWatchStatus] = useState<string>('')

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [movies.length]);

    if (!movies.length) return null;

    const currentMovie = movies[currentMovieIndex];

    const handleWatchNowClick = (): void => {
        setWatchStatus('watchNow');
    };

    const handleWatchLaterClick = (): void => {
        setWatchStatus('watchLater');
    };

    return (
        <div className="movie-banner">
            <div className="movie-banner__background">
                <img
                    src={`${baseUrlImage}original${currentMovie.backdrop_path}`}
                    alt={currentMovie.original_title}
                    className="movie-banner__image movie-banner__image--desktop"
                />
                <img
                    src={`${baseUrlImage}original${currentMovie.poster_path}`}
                    alt={currentMovie.original_title}
                    className="movie-banner__image movie-banner__image--mobile"
                />
            </div>
            <div className="movie-banner__content">
                <div className="movie-banner__buttons">
                    <button
                        className={`movie-banner__button movie-banner__button--watch-now ${watchStatus === 'watchNow' ? 'active' : ''}`}
                        onClick={handleWatchNowClick}
                    >
                    Watch Now <i className="fas fa-circle-play"></i>
                    </button>
                    <button
                        className={`movie-banner__button movie-banner__button--watch-later ${watchStatus === 'watchLater' ? 'active' : ''}`}
                        onClick={handleWatchLaterClick}
                    >
                        Watch Later <i className="fas fa-clock"></i>
                    </button>
                </div>
                <div className='movie-banner__data'>
                    <h1 className="movie-banner__title">{currentMovie.original_title}</h1>
                    <div className="movie-banner__tags">
                        <span className="movie-banner__tag">Action</span>
                        <span className="movie-banner__tag">Adventure</span>
                        <span className="movie-banner__tag">Science Fiction</span>
                        <span className="movie-banner__info"><i className="fa-regular fa-calendar-days"></i> {currentMovie.release_date.split('-')[0]}</span>
                        <span className="movie-banner__info"><i className="fa-regular fa-clock"></i> 3:12:00</span>
                        <span className="movie-banner__info"><i className="fas fa-star"></i> {currentMovie.vote_average.toFixed(1)}</span>
                    </div>
                    <p className="movie-banner__description">
                        {currentMovie.overview}
                    </p>
                </div>
            </div>
            <div className="movie-banner__navigation">
                {movies.map((movie, index) => (
                    <button
                        key={movie.id}
                        className={`movie-banner__nav-button ${index === currentMovieIndex ? 'active' : ''}`}
                        onClick={() => setCurrentMovieIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    )
}

