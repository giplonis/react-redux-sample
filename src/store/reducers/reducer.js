import * as types from '../actions/actionTypes';

const initialState = {
  payload: null,
  current: 'f20811144fa-2bf33c-11e5555557-932553252a-b2970b72321c7b36',
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      return { ...state, payload: action.payload, loading: false };
    case types.SELECT_OPTION:
      return {
        ...state,
        current: action.value,
      };
    case types.FETCH_START:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
