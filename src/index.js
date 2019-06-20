import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from './redux';
import { Provider } from 'react-redux';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register();
