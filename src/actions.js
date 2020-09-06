export const actionTypes = {
  FETCH_SONGS: 'FETCH_SONGS',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE'
};


const actions = {
  fetchSongs: (searchTerm) => ({
    type: actionTypes.FETCH_SONGS,
    payload: searchTerm
  }),
  fetchSuccess: (songs) => ({
    type: actionTypes.FETCH_SUCCESS,
    payload: songs
  }),
  fetchFailure: (error) => ({
    type: actionTypes.FETCH_FAILURE,
    payload: error
  }),
};

export default actions;