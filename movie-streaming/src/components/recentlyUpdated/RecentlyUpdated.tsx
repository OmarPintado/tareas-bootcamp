import './RecentlyUpdated.css';
import {useFetchMovies} from '../../hooks/useFetchMovies.tsx';

export const RecentlyUpdated = () => {
    const {data: movies} = useFetchMovies('https://api.themoviedb.org/3/movie/now_playing')
    const baseUrlImage: string = 'https://image.tmdb.org/t/p/';

    return (
        <div className="recently-updated">
            <h2 className="recently-updated__title">Recently Updated</h2>
            <div className="recently-updated__list-container">
                <div className="recently-updated__list">
                    {movies.map((movie) => (
                        <div key={movie.id} className="recently-updated__item">
                            <img
                                src={`${baseUrlImage}original${movie.backdrop_path}`}
                                alt={movie.title}
                                className="recently-updated__image"
                            />
                            <div className="recently-updated__info">
                                <p className="recently-updated__movie-title">{movie.title}</p>
                                <p className="recently-updated__details">
                                    <i className="fas fa-star"></i> {movie.vote_average.toFixed(1)} /
                                    <i className="fas fa-person"></i> {(movie.popularity.toFixed(0))}
                                </p>
                                <p className="recently-updated__date">{new Date(movie.release_date).toLocaleDateString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="recently-updated__button">
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}
