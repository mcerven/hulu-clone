import React from 'react';
import './MovieCard.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MovieCard({ 
    id, title, overview, backdrop_path, poster_path, release_date, vote_count
}) {
    const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path || poster_path}`;
    
    return (
        <section className="movie-card">
            <Link to={`/movies/${id}`} className="button-link">
                <img src={imageUrl} alt={title} />
                <p>{overview}</p>
                <h1>{title}</h1>
                <div className="movie-card__additional-info">
                    {release_date} • <span><ThumbUpIcon /> {vote_count}</span>
                </div>
            </Link>
        </section>
    );
}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_count: PropTypes.number.isRequired,
}