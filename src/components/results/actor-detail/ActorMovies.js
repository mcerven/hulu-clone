import React, { useEffect, useState } from 'react';
import './ActorMovies.css';
import ActorMovie from './ActorMovie';
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

export default function ActorMovies({ actorMovies }) {
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
        <section className="actor-movies">{}
            <h2 className="actor-movies__title">Known for</h2>
            <div className="actor-movies__list">
                <Slider {...settings}>
                    { actorMovies.map(movie => (
                        <ActorMovie key={movie.id} {...movie} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

ActorMovies.propTypes = {
    actorMovies: PropTypes.array.isRequired,
}
