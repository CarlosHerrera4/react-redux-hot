import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../../src/routes/counter/components/Counter';

test('Counter', () => {
  let counter = 0;
  const component = renderer.create(
    <Counter
      counter={counter}
      incrementCounter={() => { counter += 1; }}
      decreaseCounter={() => { counter -= 1; }}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
