import React, { useEffect, useState } from 'react';
import './MovieDetail.css'
import { useParams } from 'react-router-dom';
import requests from '../../../requests';
import MovieTrailerButton from './MovieTrailerButton';
import NoImage from './../../../assets/images/NoImage.png';
import MovieRating from './MovieRating';
import MovieActors from './MovieActors';

const getMovie = async (id, setMovie, setError) => {
    try {
        const response = await fetch(requests.getMovieDetails(id));
        const data = await response.json();

        if (!data || data.success === false) {
            throw Error(data?.status_message);
        }

        setMovie(data);
    } catch(error) {
        setError('Movie not found');
        console.error(error);
    }
}

const getTrailer = async (id, setTrailerUrl) => {
    try {
        const response = await fetch(requests.getMovieTrailer(id));
        const data = await response.json();
        
        if (!data || data.success === false) {
            throw Error(data?.status_message);
        }

        setTrailerUrl(`https://www.youtube.com/embed/${data.results[0].key}?rel=0&autoplay=1`);
    } catch(error) {
        console.error(error);
    }
}

const getActors = async (id, setActors) => {
    try {
        const response = await fetch(requests.getActors(id));
        const data = await response.json();
        
        if (!data || data.success === false) {
            throw Error(data?.status_message);
        }

        setActors(data.cast);
    } catch(error) {
        console.error(error);
    }
}

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [actors, setActors] = useState([]);
    const [error, setError] = useState(null);

    const genres = movie?.genres?.map(g => g.name).join(', ');

    const getImageUrl = () => {
        const imagePath = movie?.poster_path || movie?.backdrop_path;
        if (!imagePath)
            return NoImage;
        
        return `https://image.tmdb.org/t/p/w300${imagePath}`;
    }
    
    useEffect(() => {
        getMovie(id, setMovie, setError);
        getTrailer(id, setTrailerUrl);
        getActors(id, setActors);
    }, [id]);
    

    if (error) return <h2>{error}</h2>;
    if (!movie) return null;

    return (
        <div>
            <div className="movie-detail__card">
                <section className="movie-detail">
                    <img className="movie-detail__image" src={getImageUrl()} alt={movie.title} />
                    <article className="movie-detail__info">
                        <h1>{ movie.title }</h1>
                        <div className="movie-detail__subinfo">
                            { movie.vote_average !== 0 &&
                                <>
                                    <MovieRating vote_average={movie.vote_average} />
                                    <span className="movie-detail__separator">|</span>
                                </>
                            }
                            <span>{ movie.release_date }</span>
                            { genres &&
                                <>
                                    <span className="movie-detail__separator">|</span>
                                    <span>{ genres }</span>
                                </>
                            }
                        </div>
                        <p className="movie-detail__overview">{ movie.overview }</p>
                        { trailerUrl && 
                            <MovieTrailerButton
                                trailerUrl={trailerUrl}
                                buttonText="Play Trailer"
                                title={movie.title} /> 
                        }
                    </article>
                </section>
            </div>
            <div className="movie-detail__card">
                <MovieActors actors={actors} />
            </div>
        </div>
    );
}
