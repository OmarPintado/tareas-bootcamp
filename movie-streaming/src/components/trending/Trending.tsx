import Slider from 'react-slick';
import { useFetchMovies } from '../../hooks/useFetchMovies.tsx';
import './Trending.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Trending = () => {
    const { data: movies } = useFetchMovies('https://api.themoviedb.org/3/movie/upcoming', 20);
    const baseUrlImage: string = 'https://image.tmdb.org/t/p/';

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="trending">
            <div className="trending__header">
                <h2 className="trending__title">Trending</h2>
                <a href="#" className="trending__view-all">View all</a>
            </div>
            <div className="trending__slider">
                <Slider{...settings}>
                    {movies.map((movie) => (
                        <div key={movie.id} className="trending__item">
                            <img src={`${baseUrlImage}original${movie.backdrop_path}`} alt={movie.title} className="trending__image" />
                            <div className="trending__overlay">
                                <button className="trending__button">
                                    <i className="fas fa-play"></i>
                                </button>
                                <div className="trending__info">
                                    <span>{movie.video}</span>
                                    <span><i className="fas fa-star"></i> {movie.vote_average.toFixed(1)}</span>
                                </div>
                                <div className="trending__tags">
                                    <span className="trending__tag">Action</span>
                                    <span className="trending__tag">Comedy</span>
                                </div>
                            </div>
                            <p className="trending__item-title">{movie.title}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
