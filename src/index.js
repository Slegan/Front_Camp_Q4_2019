import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.component';
import NavigatePanel from './components/NavigatePanel/NavigatePanel.component';
import FilmsPreviewBox from './components/FilmsPreviewBox/FilmsPreviewBox.component';
import './main.css';


render (
  <div>
    <Header />
    <NavigatePanel />
    <FilmsPreviewBox />
  </div>,
  document.getElementById('root'),
);
