import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "/client/components/App.js";
import { Provider } from 'react-redux'
import { configureStore, compose, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import reducers from './reducers/index'
// import { createRoot } from 'react-dom/client';




// setting up redux store w/ configureStore()
const store = configureStore({reducer: reducers}, compose(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App tab="home"/>
    </Provider>
  </React.StrictMode>
);