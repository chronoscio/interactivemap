import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';

import TopNavigation from './TopNavigation';
import MapDemo from './MapDemo';

class Layout extends React.Component {

    render() {
        return (
            <React.Fragment>
                <TopNavigation />
                <div className="page">
                    <Switch>
                        <Route exact path="/" component={MapDemo}/>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default Layout;