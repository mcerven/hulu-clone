import React from 'react';
import './Nav.css';
import NavItem from './NavItem';
import navData from '../../navData';
import PropTypes from 'prop-types';

export default function Nav({selectedNavItem, setSelectedNavItem}) {
    return (
        <div className="nav">
            { navData.map(navData =>
                <NavItem
                    key={navData.id}
                    navItem={navData}
                    selectedNavItem={selectedNavItem}
                    setSelectedNavItem={setSelectedNavItem} />
            )}
        </div>
    )
}

Nav.propTypes = {
    selectedNavItem: PropTypes.object.isRequired,
    setSelectedNavItem: PropTypes.func.isRequired,
};