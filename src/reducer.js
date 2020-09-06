import { actionTypes } from './actions';

const initialState = {
  isFetching: false,
  songs: [],
  error: ''
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_SONGS:
      return {
        ...state,
        isFetching: true,
        songs: [],
        error: ''
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        songs: action.payload
      };
    case actionTypes.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default: return state;  
  }
}