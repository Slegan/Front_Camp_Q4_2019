/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import NavigatePanel from './components/NavigatePanel/NavigatePanel.component';
import FilmsPreviewBox from './components/FilmsPreviewBox/FilmsPreviewBox.component';
import SearchBox from './components/SearchBox/SearchBox.component';
import FilmDescription from './components/FilmDescription/FilmDescription.component';
import './main.css';

const pathArray = {
  '/': [
    SearchBox,
    NavigatePanel,
    FilmsPreviewBox,
  ],
  '/sortByRelease': [
    SearchBox,
    NavigatePanel,
    FilmsPreviewBox,
  ],
  '/sortByRating': [
    SearchBox,
    NavigatePanel,
    FilmsPreviewBox,
  ],
  '/search/:searchquery': [
    SearchBox,
    NavigatePanel,
    FilmsPreviewBox,
  ],
  '/film/:id': [
    FilmDescription,
    NavigatePanel,
    FilmsPreviewBox,
  ],
};

function createComponentWithProps(arr, props) {
  return arr.map((elem, index) => React.createElement(elem, { ...props, key: index }));
}

const arrayToRender = Object.keys(pathArray).map((elem, index) => (
  <Route
    path={elem}
    exact
    key={index}
    render={(props) => (
      <div route={props} className="page--wrapper">
        {(() => createComponentWithProps(pathArray[elem], props))()}
      </div>
    )}
  />
));

render(
  <Provider store={store}>
    <Router>
      <Switch>
        {arrayToRender}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
