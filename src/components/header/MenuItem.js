import React from 'react';
import './MenuItem.css';
import PropTypes from 'prop-types';

export default function MenuItem({ text, active, children }) {
    const activeClass = active ? 'active' : '';
    
    return (
        <div className={`menu-item ${activeClass}`}>
            {children}
            <span className={`menu-item__text`}>
                {text}
            </span>
        </div>
    );
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    active: PropTypes.bool,
    children: PropTypes.element.isRequired,
}