import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from './redux';
import { Provider } from 'react-redux';
import RoutesIndex from './route/index.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={Store}>
        <RoutesIndex/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register();
