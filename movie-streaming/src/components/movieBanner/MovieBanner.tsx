import './MovieBanner.css';
import imageSource from '../../assets/images/avatar.png'
import {useFetchMovies} from '../../hooks/useFetchMovies.tsx';

export const MovieBanner = () => {

    const movies = useFetchMovies('https://api.themoviedb.org/3/movie/popular');

    return (
        <div className="movie-banner">
            <div className="movie-banner__background">
                <img
                    src={imageSource}
                    alt="Avatar: The Way of Water"
                    className="movie-banner__image"
                />
            </div>
            <div className="movie-banner__content">
                <div className="movie-banner__buttons">
                    <button className="movie-banner__button movie-banner__button--watch-now">
                        Watch Now <i className="fas fa-circle-play"></i>
                    </button>
                    <button className="movie-banner__button movie-banner__button--watch-later">
                        Watch Later <i className="fas fa-clock"></i>
                    </button>
                </div>
                <div className='movie-banner__data'>
                    <h1 className="movie-banner__title">Avatar: The Way of Water</h1>
                    <div className="movie-banner__tags">
                        <span className="movie-banner__tag">Action</span>
                        <span className="movie-banner__tag">Adventure</span>
                        <span className="movie-banner__tag">Science Fiction</span>
                        <span className="movie-banner__info"><i className="fa-regular fa-calendar-days"></i> 2022</span>
                        <span className="movie-banner__info"><i className="fa-regular fa-clock"></i> 3:12:00</span>
                        <span className="movie-banner__info"><i className="fas fa-star"></i> 8.5</span>
                    </div>
                    <p className="movie-banner__description">
                        Set more than a decade after the events of the first film, learn the story of the
                        Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.
                    </p>
                </div>
            </div>
        </div>
    )
}
