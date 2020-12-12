import React from 'react';
import './MovieCard.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MovieCard({movie}) {
    const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`;
    
    return (
        <Link to={`/movies/${movie.id}`}>
            <section className="movie-card">
                <img src={imageUrl} alt={movie.title} />
                <p>{movie.overview}</p>
                <h1>{movie.title}</h1>
                <div className="movie-card__additional-info">
                    {movie.release_date} • <span><ThumbUpIcon /> {movie.vote_count}</span>
                </div>
            </section>
        </Link>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
}