import ACTIONS from './actionsTypes';
import { requestAPI } from '../helpers/helpers';
import { ROUTS } from '../helpers/constants';
import store from '../store';

const loadFilmsSuccess = data => ({
  type: ACTIONS.LOAD_FILMS_SUCCESS,
  data,
});

export function fetchAllFilms(sortByDate) {
  const url = `${ROUTS.HEROKU_APP}${ROUTS.ORDER}&${
    sortByDate ? ROUTS.SORT_BY_RELEASE : ROUTS.SORT_BY_RATING}`

  return dispatch => requestAPI(url).then((res) => {
    dispatch(loadFilmsSuccess(res.data));
  }).catch((error) => {
    console.log(error);
  });
}

export function setSortBy (data) {
  return {
    type: ACTIONS.SET_SORT_TYPE,
    data,
  }
};

export function setSearchBy (data) {
  return {
    type: ACTIONS.SET_SEARCH_TYPE,
    data,
  }
};

const loadFilmSuccess = data => ({
  type: ACTIONS.LOAD_FILM_SUCCESS,
  data,
});

export function fetchSelectedFilm(id) {
  return dispatch => requestAPI(`${ROUTS.HEROKU_APP}/${id}`).then((res) => {
    dispatch(loadFilmSuccess(res));
  }).catch((error) => {
    console.log(error);
  });
}

const loadSearchResults = (data, searchQuery) => ({
  type: ACTIONS.LOAD_SEARCH_RESULTS,
  data,
  searchQuery,
});

export function requestSearch(sortByDate, searchByTtile, searchStr) {
  const url = `${ROUTS.HEROKU_APP}${ROUTS.ORDER}&${
    sortByDate ? ROUTS.SORT_BY_RELEASE : ROUTS.SORT_BY_RATING}&${
    searchByTtile ? ROUTS.SEARCH_BY_TITLE : ROUTS.SEARCH_BY_GENRE}&${
    ROUTS.SEARCH}${searchStr}`

  return dispatch => requestAPI(url).then((res) => {
    dispatch(loadSearchResults(res.data, searchStr));
  }).catch((error) => {
    console.log(error);
  });
}
