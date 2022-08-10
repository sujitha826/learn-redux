import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';            // connects the global store to App or provider provides access to all reducers in myStore inside App
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
import { ThunkMiddleware } from 'redux-thunk';
import axios from 'axios';

// global store of the whole app
const myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* React Redux includes a <Provider /> component, which makes the Redux store available to the rest of your app*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);

