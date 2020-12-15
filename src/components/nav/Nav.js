import React from 'react';
import './Nav.css';
import NavItem from './NavItem';
import navData from '../../navData';
import { matchPath, withRouter } from 'react-router-dom';

const Nav = ({history}) => {
    const match = matchPath(history.location.pathname, {
        path: "/movies/category/:id"
    })

    let categoryId;

    if (match && match.params.id) {
        categoryId = match.params.id;
    }
    
    return (
        <div className="nav">
            { navData.map(navData =>
                <NavItem key={navData.path} navItem={navData} categoryId={categoryId} />
            )}
        </div>
    )
}

export default withRouter(Nav);
