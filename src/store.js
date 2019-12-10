import { createStore } from 'redux';
import films from './reducers/films.reducer';

const store = createStore(
  films,
);

export default store;
