// constants
export const FIRE_ADD = 'FIRE_ADD';
export const FIRE_DECREASE = 'FIRE_DECREASE';
export const FIRE_FETCH_SUCCESS = 'FIRE_FETCH_SUCCESS';

// sync actions
export const incrementFire = () =>
  ({ type: FIRE_ADD, payload: null });
export const decreaseFire = () =>
  ({ type: FIRE_DECREASE, payload: null });
export const fetchFireSuccess = fire =>
 ({ type: FIRE_FETCH_SUCCESS, payload: fire });

// Async actions creators
export const fetchFire = () => dispatch =>
  fetch('src/assets/fire.json')
    .then(response => response.json())
    .then((data) => {
      dispatch(fetchFireSuccess(data.fire));
    })
    .catch((error) => {
      console.error(error);
    });

// Reducer
const initialState = {
  fire: '',
  fireSize: 0,
};

export default function fireReducer(state = initialState, action) {
  switch (action.type) {
    case FIRE_ADD:
      return {
        ...state,
        fireSize: state.fireSize + 0.8,
      };
    case FIRE_DECREASE:
      // return state <= 0 ? state : state - 0.8;
      return {
        ...state,
        fireSize: state.fireSize <= 0 ? state.fireSize : state.fireSize - 0.8,
      };
    case FIRE_FETCH_SUCCESS:
      return {
        ...state,
        fire: action.payload,
      };
    default:
      return state;
  }
}
