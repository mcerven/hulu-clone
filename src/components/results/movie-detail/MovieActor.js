import React from 'react';
import './MovieActor.css';
import NoProfileImage from './../../../assets/images/NoProfileImage.jpg';
import { Link } from 'react-router-dom';

export default function MovieActor({ id, name, character, profile_path }) {
    const imageUrl = profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : NoProfileImage;
    
    return (
        <Link to={`/actors/${id}`} className="button-link">
            <article className="movie-actor">
                <img width="200" height="300" src={imageUrl} alt={name} />
                <div className="movie-actor__character">{character}</div>
                <div className="movie-actor__name">{name}</div>
            </article>
        </Link>
    );
}
