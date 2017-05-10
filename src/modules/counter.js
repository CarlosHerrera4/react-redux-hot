const ADD_COUNTER = 'ADD_COUNTER';
const DECREASE_COUNTER = 'DECREASE_COUNTER';

export function incrementCounter() {
  return { type: ADD_COUNTER, payload: null };
}

export function decreaseCounter() {
  return { type: DECREASE_COUNTER, payload: null };
}

const initialState = 0;

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return state + 0.8;
    case DECREASE_COUNTER:
      return state <= 0 ? state : state - 0.8;
    default:
      return state;
  }
}
