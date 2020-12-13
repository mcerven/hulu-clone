import React from 'react';
import './MovieSearchOption.css';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export function MovieSearchOption({ id, title, poster_path, backdrop_path }) {
    const imageUrl = `https://image.tmdb.org/t/p/w200${poster_path || backdrop_path}`;

    return (
        <div className="movie-search-option">
            <Link className="button-link" to={`/movies/${id}`}>
                <div className="movie-search-option__content">
                    <img src={imageUrl} alt={`${title}`} />
                    <div>
                        <Typography noWrap className="movie-search-option__info--primary">{title}</Typography>
                        <Typography noWrap className="movie-search-option__info--secondary">year</Typography>
                        <Typography noWrap className="movie-search-option__info--secondary">cast</Typography>
                    </div>
                </div>
            </Link>
        </div>
    );
}

MovieSearchOption.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
};
