const ADD_COUNTER = 'ADD_COUNTER';
const DECREASE_COUNTER = 'DECREASE_COUNTER';

export function incrementCounter(amount = 1) {
  return { type: ADD_COUNTER, payload: amount };
}

export function decreaseCounter(amount = -1) {
  return { type: DECREASE_COUNTER, payload: amount };
}

const initialState = 0;

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return state + action.payload;
    case DECREASE_COUNTER:
      return state <= 0 ? state : state - action.payload;
    default:
      return state;
  }
}
