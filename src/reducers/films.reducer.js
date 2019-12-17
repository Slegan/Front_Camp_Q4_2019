
import ACTIONS from '../actions/actionsTypes';
import { sortOrder } from '../helpers/helpers';

const initialState = {
  films: [],
  sortByDate: true,
  searchByTtile: true,
  searchGenre: null,
  selectedFilm: {},
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_FILMS_SUCCESS:
      return {
        ...state,
        films: action.data,
      };
    case ACTIONS.SET_SORT_TYPE:
      const sortedProperty = action.data ? 'release_date' : 'vote_average';
      const sortedArray = state.films.map((elem)=>{return elem});
      sortOrder(sortedArray, sortedProperty);
      return {
        ...state,
        films: sortedArray,
        sortByDate: action.data,
      };
    case ACTIONS.SET_SEARCH_TYPE:
      return {
        ...state,
        searchByTtile: action.data,
      };
    case ACTIONS.LOAD_FILM_SUCCESS:
      return {
        ...state,
        selectedFilm: action.data,
      };
    case ACTIONS.LOAD_SEARCH_RESULTS:
      const searchGenreQuery = state.searchByTtile ? null : action.searchQuery
      return {
        ...state,
        searchGenre: searchGenreQuery,
        films: action.data,
      };
    default:
      return state;
  }
};

export default films;
