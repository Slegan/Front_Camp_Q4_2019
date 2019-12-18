import { createStore, applyMiddleware } from 'redux';
import films from './reducers/films.reducer';
import thunk from 'redux-thunk';

const store = createStore (
  films,
  applyMiddleware(thunk),
);

export default store;
