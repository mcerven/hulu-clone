import React from 'react';
import './ActorMovies.css';
import ActorMovie from './ActorMovie';

export default function ActorMovies({ actorMovies }) {
    console.log(actorMovies)
    return (
        <section className="actor-movies">
            <h2 className="actor-movies__title">Known for</h2>
            <div className="actor-movies__list">
                { actorMovies.map(movie => (
                    <ActorMovie key={movie.id} {...movie} />
                ))}
            </div>
        </section>
    );
}
