import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import MapDemo from './MapDemo';

class Layout extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    }

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <Route exact path="/" component={MapDemo}/>
            </ConnectedRouter>
        );
    }
}

export default Layout;