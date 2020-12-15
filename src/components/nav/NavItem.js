import React from 'react';
import './NavItem.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavItem({ navItem, categoryId }) {
    return (
        <Link to={`/movies/category/${navItem.path}`} className="button-link">
            <span className={`nav-item ${navItem.path === categoryId && 'active'}`}>
                { navItem.text }
            </span>
        </Link>
    )
}

NavItem.propTypes = {
    navItem: PropTypes.object.isRequired,
};