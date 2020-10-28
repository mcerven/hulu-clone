import React from 'react';
import './NavItem.css';
import PropTypes from 'prop-types';

export default function NavItem({ 
    text,
    url,
    selectedNavItemUrl,
    setSelectedNavItemUrl,
 }) {
    const handleClick = () => {
        setSelectedNavItemUrl(url);
    };

    const activeClass = url === selectedNavItemUrl ? 'active' : '';

    return (
        <span
            className={`nav-item ${activeClass}`}
            onClick={handleClick}>
           { text }
        </span>
    )
}

NavItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    selectedNavItemUrl: PropTypes.string.isRequired,
    setSelectedNavItemUrl: PropTypes.func.isRequired,
};