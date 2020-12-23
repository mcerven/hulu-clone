import React, { useEffect, useState } from 'react';
import './ActorDetail.css'
import { useParams } from 'react-router-dom';
import requests from '../../../requests';
import NoProfileImage from './../../../assets/images/NoProfileImage.jpg';
import CakeIcon from '@material-ui/icons/Cake';
import ActorMovies from './ActorMovies';

const getActor = async (id, setActor, setError) => {
    try {
        const response = await fetch(requests.getActorDetails(id));
        const data = await response.json();

        if (!data || data.success === false) {
            throw Error(data?.status_message);
        }

        setActor(data);
    } catch(error) {
        setError('Actor not found');
        console.error(error);
    }
}

const getActorMovies = async (id, setActorMovies, setError) => {
    try {
        const response = await fetch(requests.getActorMovies(id));
        const data = await response.json();

        if (!data || data.success === false) {
            throw Error(data?.status_message);
        }

        setActorMovies(data.cast);
    } catch(error) {
        setError('Actor movies not found');
        console.error(error);
    }
}

export default function ActorDetail() {
    const { id } = useParams();
    const [actor, setActor] = useState(null);
    const [actorMovies, setActorMovies] = useState([]);
    const [error, setError] = useState(null);

    const getImageUrl = () => {
        const imagePath = actor?.profile_path;
        if (!imagePath)
            return NoProfileImage;
        
        return `https://image.tmdb.org/t/p/w300${imagePath}`;
    }
    
    useEffect(() => {
        getActor(id, setActor, setError);
        getActorMovies(id, setActorMovies, setError);
    }, [id]);
    

    if (error) return <h2>{error}</h2>;
    if (!actor) return null;

    return (
        <div>
            <div className="actor-detail__card">
                <section className="actor-detail">
                    <img width="300" height="450" className="actor-detail__image" src={getImageUrl()} alt={actor.name} />
                    <article className="actor-detail__info">
                        <h1>{ actor.name }</h1>
                        { actor.birthday && actor.place_of_birth && (
                            <div className="actor-detail__subinfo">
                                <CakeIcon fontSize="small" />
                                <span>{actor.birthday}</span>
                                <span> in </span>
                                <span>{actor.place_of_birth}</span>
                            </div>
                        )}
                        <p className="actor-detail__overview">{ actor.biography || 'This actor has no bio.' }</p>
                    </article>
                </section>
            </div>
            <div className="actor-detail__card">
                <ActorMovies actorMovies={actorMovies} />
            </div>
        </div>
    );
}
