import { FIRE_ADD, FIRE_DECREASE, incrementFire, decreaseFire } from '../../src/modules/fire';

describe('fire actions', () => {
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
});
