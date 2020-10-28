import React from 'react';
import './Nav.css';
import NavItem from './NavItem';
import requests from '../../requests';
import PropTypes from 'prop-types';

const navDataItems = [
    {
        id: 1,
        text: "Trending",
        url: requests.getTrending,
    },
    {
        id: 2,
        text: "Top Rated",
        url: requests.getTopRated,
    },
    {
        id: 3,
        text: "Action",
        url: requests.getAction,
    },
    {
        id: 4,
        text: "Comedy",
        url: requests.getComedy,
    },
    {
        id: 5,
        text: "Horror",
        url: requests.getHorror,
    },
    {
        id: 6,
        text: "Romance",
        url: requests.getRomance,
    },
    {
        id: 7,
        text: "Mystery",
        url: requests.getMystery,
    },
    {
        id: 8,
        text: "Sci-Fi",
        url: requests.getScifi,
    },
    {
        id: 9,
        text: "Western",
        url: requests.getWestern,
    },
    {
        id: 10,
        text: "Animation",
        url: requests.getAnimation,
    },
    {
        id: 11,
        text: "TV Movie",
        url: requests.getTvMovie,
    },
];

export default function Nav({selectedNavItemUrl, setSelectedNavItemUrl}) {
    return (
        <div className="nav">
            { navDataItems.map(navData =>
                <NavItem
                    key={navData.id}
                    text={navData.text}
                    url={navData.url}
                    selectedNavItemUrl={selectedNavItemUrl}
                    setSelectedNavItemUrl={setSelectedNavItemUrl} />
            )}
        </div>
    )
}

Nav.propTypes = {
    selectedNavItemUrl: PropTypes.string.isRequired,
    setSelectedNavItemUrl: PropTypes.func.isRequired,
};