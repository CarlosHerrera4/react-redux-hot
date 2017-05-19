import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { FIRE_ADD, FIRE_DECREASE, FIRE_FETCH_SUCCESS, incrementFire, decreaseFire, fireFetchSuccess, fetchFire } from '../../src/modules/fire';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fire sync actions', () => {
  it('should create an action to increment fire size', () => {
    const expectedAction = {
      type: FIRE_ADD,
      payload: null,
    };
    expect(incrementFire()).toEqual(expectedAction);
  });
  it('should create an action to decrease fire size', () => {
    const expectedAction = {
      type: FIRE_DECREASE,
      payload: null,
    };
    expect(decreaseFire()).toEqual(expectedAction);
  });
  it('should create an action to decrease fire size', () => {
    const expectedAction = {
      type: FIRE_DECREASE,
      payload: null,
    };
    expect(decreaseFire()).toEqual(expectedAction);
  });
  it('should create an action that returns te 🔥 string', () => {
    const expectedAction = {
      type: FIRE_FETCH_SUCCESS,
      payload: '🔥🔥🔥🔥',
    };
    expect(fireFetchSuccess('🔥🔥🔥🔥')).toEqual(expectedAction);
  });
});


describe('fire async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it(' creates FIRE_FETCH_SUCCESS when fetching 🔥 has been done', () => {
    nock('http://localhost:8080/')
      .get('/api/example')
      .reply(200, { fire: '🔥' });
    const expectedAction = [{ type: FIRE_FETCH_SUCCESS, payload: '🔥' }];
    const store = mockStore({ fire: '', fireSize: 0 });
    return store.dispatch(fetchFire())
      .then(() => {
        console.log(store.getActions());//eslint-disable-line
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
