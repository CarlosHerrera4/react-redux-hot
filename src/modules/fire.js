export const FIRE_ADD = 'FIRE_ADD';
export const FIRE_DECREASE = 'FIRE_DECREASE';

export function incrementFire() {
  return { type: FIRE_ADD, payload: null };
}

export function decreaseFire() {
  return { type: FIRE_DECREASE, payload: null };
}

const initialState = 0;

export default function fireReducer(state = initialState, action) {
  switch (action.type) {
    case FIRE_ADD:
      return state + 0.8;
    case FIRE_DECREASE:
      return state <= 0 ? state : state - 0.8;
    default:
      return state;
  }
}
