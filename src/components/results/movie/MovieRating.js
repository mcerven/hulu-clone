import React from 'react';
import './MovieRating.css';
import StarIcon from '@material-ui/icons/Star';

export default function MovieRating({ vote_average }) {
    return (
        <>
            <span className="movie-rating__icon">
                <StarIcon fontSize="small" />
            </span>
            <span>{vote_average * 10}%</span>
        </>
    );
}
