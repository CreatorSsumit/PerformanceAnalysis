import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk"
import './index.css';
import App from './App';
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux';
import rootreducers from "./reducers"



var createStoreMiddeleWrare = createStore(rootreducers, applyMiddleware(thunk))


ReactDOM.render(<Provider store={createStoreMiddeleWrare}>

  <App />

</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
