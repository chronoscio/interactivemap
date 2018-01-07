import React from 'react';
import { Provider }           from 'react-redux';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import Layout from './components/Layout';

// import '../css/index.css';

// import 'react-select/dist/react-select.css';
// import * as MapJS from './map.js';

class App extends React.component {

    constructor(props) {
        super(props);
        this.store = createStore();
    }

    render() {
        return (
            <Provider store={this.store}>
                <Layout />
            </Provider>
        );
    }
}

export function startClient() {

    return ReactDOM.render(
    <App />, document.getElementById('react'));
}


