import React from 'react';
import MovieCard from './MovieCard';
import './Results.css';
import PropTypes from "prop-types";

export default function Results({movies}) {
    if (!movies) {
        return (
            <div>
                <h2>No results found</h2>
            </div>
        );
    }

    return (
        <div className="results">
            { movies.map(movie => 
                <MovieCard key={movie.id} movie={movie} />
            )}
        </div>
    );
}

Results.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
}