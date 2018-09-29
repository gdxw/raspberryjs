import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import routes from './router.config';

let store = configureStore();

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router >
            {renderRoutes(routes)}
        </Router>
    </Provider>,
    document.getElementById('app') 
)