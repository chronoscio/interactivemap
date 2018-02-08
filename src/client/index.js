import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

import {createStore, history} from './store';

import '../css/index.css';

import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
// import * as MapJS from './map.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.store = createStore();
    }

    render() {
        return (
            <Provider store={this.store}>
              <ConnectedRouter history={history}>
                <Layout />
              </ConnectedRouter>
            </Provider>
        );
    }
}

export function startClient(initialState) {

    return ReactDOM.render(
    <App />, document.getElementById('react'));
}
