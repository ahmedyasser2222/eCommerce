import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"

import "../node_modules/font-awesome/css/font-awesome.min.css"

import {BrowserRouter} from "react-router-dom"
import  Store from "./component/redux/store.jsx"
import {Provider}from "react-redux"
ReactDOM.render(
  <Provider store={Store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
    ,
  document.getElementById('root')
);


