import React, { useEffect, useState } from 'react';
import './MovieActors.css';
import MovieActor from './MovieActor';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

const calculateSliderSettings = () => {
    const slidesToShow = window.innerWidth / 250;
    
    return ({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        swipe: false,
    });
};

export default function MovieActors({ actors }) {
    const [settings, setSettings] = useState(() => calculateSliderSettings());

    useEffect(() => {
        function handleResize() {
            setSettings(calculateSliderSettings());
        }
        window.addEventListener('resize', handleResize)
    
        return () => {
          window.removeEventListener('resize', handleResize)
        };
    }, []);

    return (
        <section className="movie-actors">
            <h2 className="movie-actors__title">Top cast</h2>
            <div className="movie-actors__list">
                <Slider {...settings}>
                    {actors.map(actor => (
                        <MovieActor key={actor.id} {...actor} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

MovieActors.propTypes = {
    actors: PropTypes.array.isRequired,
}
