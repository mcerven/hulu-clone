import React from 'react';
import './MovieActors.css';
import MovieActor from './MovieActor';

export default function MovieActors({ actors }) {
    return (
        <section className="movie-actors">
            <h2 className="movie-actors__title">Cast</h2>
            <div className="movie-actors__list">
                {actors.map(actor => (
                    <MovieActor key={actor.id} {...actor} />
                ))}
            </div>
        </section>
    );
}
