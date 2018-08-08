import * as types from './actionTypes';
import data from '../data/response.json';

export const fetchData = () => {
  return dispatch => {
    dispatch({
      type: types.FETCH_START,
    });
    setTimeout(() => dispatch(fetchSuccess()), 1000);
  };
};

const fetchSuccess = () => {
  return {
    type: types.FETCH_SUCCESS,
    payload: data,
  };
};

export const selectOption = value => {
  return {
    type: types.SELECT_OPTION,
    value,
  };
};
