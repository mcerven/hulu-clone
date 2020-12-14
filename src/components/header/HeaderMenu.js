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
            <div>
                <MenuItem text="Home" active>
                    <Link to={'/'} className="button-link">
                        <HomeIcon />
                    </Link>
                </MenuItem>
            </div>
            <div>
                <MenuItem text="Trending">
                    <FlashOnIcon />
                </MenuItem>
            </div>
            <div>
                <MenuItem text="Verified">
                    <LiveTvIcon />
                </MenuItem>
            </div>
            <div>
                <MenuItem text="Collections">
                    <VideoLibraryIcon />
                </MenuItem>
            </div>
            <div onClick={() => movieSearchRef.current.focus()}>
                <MenuItem text="Search">
                    <SearchIcon />
                </MenuItem>
            </div>
            <div style={{marginLeft: '-1em'}}>
                <MovieSearch ref={movieSearchRef} />
            </div>
        </div>
    );
}