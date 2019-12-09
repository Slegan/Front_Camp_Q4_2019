import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.component.jsx';
import NavigatePanel from './components/NavigatePanel/NavigatePanel.component.jsx';
// import MainViewBox from './components/MainViewBox/MainViewBox.component';
import './main.css';


render (
  <div>
    <Header />
    <NavigatePanel />
  </div>,
  document.getElementById('root'),
);
