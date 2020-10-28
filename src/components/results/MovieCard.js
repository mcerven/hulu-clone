import React from 'react';
import './MovieCard.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PropTypes from 'prop-types';

export default function MovieCard({movie}) {
    const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`;
    
    return (
        <section className="movie-card">
            <img src={imageUrl} alt={movie.title} />
            <p>{movie.overview}</p>
            <h1>{movie.title}</h1>
            <div className="movie-card__additional-info">
                {movie.release_date} • <span><ThumbUpIcon /> {movie.vote_count}</span>
            </div>
        </section>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
}