import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './components/Routing/routing'
import * as serviceWorker from './serviceWorker';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from './store'

let store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(<Provider store={store}>
    <Routing />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
