import React, { useRef } from 'react';
import './HeaderMenu.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from './MenuItem';
import MovieSearch from './MovieSearch';
import { Link } from 'react-router-dom';

export default function HeaderMenu() {
    const movieSearchRef = useRef(null);

    return (
        <div className="header-menu">
            <MenuItem text="Home" active>
                <Link to={'/'} className="button-link">
                    <HomeIcon />
                </Link>
            </MenuItem>
            <MenuItem text="Trending">
                <FlashOnIcon />
            </MenuItem>
            <MenuItem text="Verified">
                <LiveTvIcon />
            </MenuItem>
            <MenuItem text="Collections">
                <VideoLibraryIcon />
            </MenuItem>
            <MenuItem text="Search">
                <SearchIcon onClick={() => movieSearchRef.current.focus()} />
            </MenuItem>
            <MovieSearch ref={movieSearchRef} />
        </div>
    );
}