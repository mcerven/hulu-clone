import React from 'react';
import './MovieSearchOption.css';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import NoImage from './../../assets/images/NoImage.png';

export function MovieSearchOption({ id, title, poster_path, backdrop_path }) {
    const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}`
        : NoImage;

    return (
        <div className="movie-search-option" style={{width: '100%'}}>
            <Link className="button-link" to={`/movies/${id}`}>
                <div className="movie-search-option__content" style={{width: '100%'}}>
                    <img src={imageUrl} alt={`${title}`} width="50" />
                    <div style={{width: '70%'}}>
                        <Typography noWrap className="movie-search-option__info--primary"
                            style={{
                                width: '100%', whiteSpace: 'nowrap', textOverflow: 'ellipsis', 
                            }}>{title}</Typography>
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
