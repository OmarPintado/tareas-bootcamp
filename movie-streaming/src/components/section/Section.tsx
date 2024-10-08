import React from 'react';
import { Movie } from '../../interfaces/movie.interface.ts';
import './Section.css';

interface SectionProps {
    title: string;
    movies: Movie[];
}

const baseUrlImage: string = 'https://image.tmdb.org/t/p/';

export const Section: React.FC<SectionProps> = ({title, movies}) => {
    return (
        <div className="section">
            <div className="section__header">
                <h2 className="section__title">{title}</h2>
                <a href="#" className="section__view-all">View all</a>
            </div>
            <div className="section__list">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie__item">
                        <img src={`${baseUrlImage}original${movie.backdrop_path}`} alt={movie.title} className="section__image"/>
                        <div className="movie__overlay">
                            <button className="section__button">
                                <i className="fas fa-play"></i>
                            </button>
                            <div className="movie__info">
                                <span><i className="fa-solid fa-pencil"></i> {movie.vote_count}</span>
                                <span><i className="fas fa-star"></i> {movie.vote_average.toFixed(1)}</span>
                            </div>
                            <div className="movie__tags">
                                {movie.genre_ids.map((genre) => (
                                    <span key={genre} className="movie__tag">{genre}</span>
                                ))}
                            </div>
                        </div>
                        <p className="movie__title">{ movie.title || movie.name }</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
