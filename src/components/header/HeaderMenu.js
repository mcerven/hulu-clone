import React, { useRef } from 'react';
import './HeaderMenu.css';
import HomeIcon from '@material-ui/icons/Home';
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
            <div onClick={() => movieSearchRef.current.focus()}>
                <MenuItem text="Search">
                    <SearchIcon />
                </MenuItem>
            </div>
            <div>
                <MovieSearch ref={movieSearchRef} />
            </div>
        </div>
    );
}