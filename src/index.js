import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import history from './history';
import Header from './components/Header/header.component';

ReactDOM.render(
  <BrowserRouter history={history}>
      <Header />
      <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);


