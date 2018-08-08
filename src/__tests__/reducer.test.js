import * as types from '../store/actions/actionTypes';
import reducer from '../store/reducers';

import data from '../store/data/response.json';

describe('store/reducer', () => {
  it('should return initial state when no action is passed', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle FETCH_SUCCESS', () => {
    let state = {
      payload: null,
      current: 'f20811144fa-2bf33c-11e5555557-932553252a-b2970b72321c7b36',
      loading: false,
    };
    state = reducer(state, { type: types.FETCH_SUCCESS, payload: data });
    expect(state).toMatchSnapshot();
  });

  it('should handle SELECT_OPTION', () => {
    let state = {
      payload: null,
      current: 'f20811144fa-2bf33c-11e5555557-932553252a-b2970b72321c7b36',
      loading: false,
    };
    state = reducer(state, { type: types.SELECT_OPTION, value: 'mockId' });
    expect(state).toMatchSnapshot();
  });
});
