import React, { useEffect, useState } from 'react';
import './MovieDetail.css'
import { useParams } from 'react-router-dom';
import requests from '../../../requests';
import StarIcon from '@material-ui/icons/Star';

const fetchMovie = async (id, setMovie, setError) => {
    try {
        const response = await fetch(requests.getMovieDetails(id));
        const data = await response.json();
        
        console.log(data);
        
        if (data.success === false) {
            throw Error(data.status_message);
        }

        setMovie(data);
    } catch(error) {
        setError('Movie not found');
        console.error(error);
    }
}

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    const imageUrl = `https://image.tmdb.org/t/p/w300${movie?.poster_path || movie?.backdrop_path}`;
    const rating = movie?.vote_average ? movie.vote_average * 10 : null;
    const genres = movie?.genres?.map(g => g.name).join(', ');
    
    useEffect(() => {
        fetchMovie(id, setMovie, setError);
    }, [id]);
    

    if (error) return <h2>{error}</h2>;
    if (!movie) return null;

    return (
        <section className="movie-detail">
            <img src={imageUrl} alt={movie.title} />
            <div className="movie-detail__info">
                <h1>{ movie.title }</h1>
                <div className="movie-detail__subinfo">
                    {rating && 
                        <>
                            <span className="movie-detail__rating-icon"><StarIcon fontSize="small" /></span>
                            <span>{ rating }%</span> 
                            <span className="movie-detail__separator">|</span>
                        </>
                    }
                    <span>{ movie.release_date }</span>
                    <span className="movie-detail__separator">|</span>
                    <span>{ genres }</span>
                </div>
                <p className="movie-detail__overview">{ movie.overview }</p>
            </div>
        </section>
    );
}
