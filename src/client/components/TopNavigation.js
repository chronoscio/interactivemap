import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Link = (props) =>
    <NavLink activeClassName="selected" {...props}>{props.children}</NavLink>

class TopNavigation extends React.Component {

    render() {
        return (
            <div className="top-navigation">
                <div className="logo">History Map</div>
                <nav>
                    <Link to="/">Demo</Link>
                </nav>
            </div>
        );

    }
}

export default TopNavigation;
