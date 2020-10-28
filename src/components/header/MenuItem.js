import React from 'react';
import './MenuItem.css';
import PropTypes from 'prop-types';

export default function MenuItem({ text, active, children }) {
    return (
        <div className={`menu-item ${active && 'active'}`}>
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