import React from 'react';
import './NavItem.css';
import PropTypes from 'prop-types';

export default function NavItem({ navItem, selectedNavItem, setSelectedNavItem }) {
    const handleClick = () => {
        setSelectedNavItem(navItem);
    };

    const activeClass = navItem.id === selectedNavItem.id ? 'active' : '';

    return (
        <span
            className={`nav-item ${activeClass}`}
            onClick={handleClick}>
           { navItem.text }
        </span>
    )
}

NavItem.propTypes = {
    navItem: PropTypes.object.isRequired,
    selectedNavItem: PropTypes.object.isRequired,
    setSelectedNavItem: PropTypes.func.isRequired,
};