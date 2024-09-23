import './MovieBanner.css';
import imageSource from '../../assets/images/avatar.png'

export const MovieBanner = () => {
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
                        Watch Now <i className="fas fa-play"></i>
                    </button>
                    <button className="movie-banner__button movie-banner__button--watch-later">
                        Watch Later <i className="fas fa-clock"></i>
                    </button>
                </div>
                <h1 className="movie-banner__title">Avatar: The Way of Water</h1>
                <div className="movie-banner__tags">
                    <span className="movie-banner__tag">Action</span>
                    <span className="movie-banner__tag">Adventure</span>
                    <span className="movie-banner__tag">Science Fiction</span>
                </div>
                <div className="movie-banner__info">
                    <span>2022</span>
                    <span>3:12:00</span>
                    <span>8.5</span>
                </div>
                <p className="movie-banner__description">
                    Set more than a decade after the events of the first film, learn the story of the Sully family...
                </p>
            </div>
        </div>
    )
}
