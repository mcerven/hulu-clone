import React from 'react';
import './ActorMovie.css';
import NoImage from './../../../assets/images/NoImage.png';
import { Link } from 'react-router-dom';

export default function ActorMovie({ id, title, poster_path }) {
    const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : NoImage;

    return (
        <div className="actor-movie">
            <Link to={`/movies/${id}`} className="button-link">
                <article>
                    <img className="actor-movie__image" width="200" height="300" src={imageUrl} alt={title} />
                    <div className="actor-movie__name">{title}</div>
                </article>
            </Link>
        </div>
    );
}
