import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './routes/Router';
import {createStore,applyMiddleware}  from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index';

const store = createStore(reducers,{},applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
          <Router />
    </Provider>

, document.getElementById('root'));

