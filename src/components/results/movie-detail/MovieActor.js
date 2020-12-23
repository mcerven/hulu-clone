import React from 'react';
import './MovieActor.css';
import NoProfileImage from './../../../assets/images/NoProfileImage.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieActor({ id, name, character, profile_path }) {
    const imageUrl = profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : NoProfileImage;
    
    return (
        <div className="movie-actor">
            <Link to={`/actors/${id}`} className="button-link">
                <article>
                    <img width="200" height="300" src={imageUrl} alt={name} />
                    <div className="movie-actor__character">{character}</div>
                    <div className="movie-actor__name">{name}</div>
                </article>
            </Link>
        </div>
    );
}

MovieActor.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
}
