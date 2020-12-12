import React from 'react';
import './HeaderMenu.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';

export default function HeaderMenu() {
    return (
        <div className="header-menu">
            <MenuItem text="Home" active>
                <Link to={'/'}>
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
                <SearchIcon />
            </MenuItem>
            <MenuItem text="Account">
                <PersonOutlineIcon />
            </MenuItem>
        </div>
    );
}