/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Header from './components/Header/Header.component';
import NavigatePanel from './components/NavigatePanel/NavigatePanel.component';
import FilmsPreviewBox from './components/FilmsPreviewBox/FilmsPreviewBox.component';
import './main.css';

const pathArray = {
  '/': [
    Header,
    NavigatePanel,
    FilmsPreviewBox,
  ],
  '/film': [
    Header,
    NavigatePanel,
  ],
  // ['/film/:id']: [
  //   Header,
  //   NavigatePanel,
  // ],
};

function createComponentWithProps(arr, props) {
  return arr.map((elem, index) => React.createElement(elem, { ...props, key: index }));
}


console.log(Object.keys(pathArray));
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
        {/* {arrayToRender} */}
        <Route exact path="/" component={Header} />
        <Route path="/film" component={NavigatePanel} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// render (
//   <div>
//     <Header />
//     <NavigatePanel />
//     <FilmsPreviewBox />
//   </div>,
//   document.getElementById('root'),
// );
