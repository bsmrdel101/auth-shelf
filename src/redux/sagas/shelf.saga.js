import axios from 'axios';
import { put, take, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchShelf(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/shelf', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_SHELF', payload: response.data });
  } catch (error) {
    console.log('Shelf get request failed', error);
  }
}
function* createItem (action){
  try {
    const response = yield axios.post('/api/shelf', action.payload) 
    yield put({ type: 'FETCH_SHELF', payload: response.data });

  } catch (error) {
    console.log('Shelf get request failed', error);
  }

}
function* deleteItem (action){
  try {
    const response = yield axios.delete(`/api/shelf/${action.payload.id}`, action.payload) 
    yield put({ type: 'FETCH_SHELF', payload: response.data });

  } catch (error) {
    console.log('Shelf get request failed', error);
  }

}

function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
  yield takeLatest('CREATE_ITEM', createItem);
  yield takeLatest('DELETE_ITEM', deleteItem);
}

export default shelfSaga;
