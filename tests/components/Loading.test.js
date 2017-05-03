import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../../src/components/Loading';
// import Image from '../../src/assets/loading.gif';

test('Loading renders as expected', () => {
  const component = renderer.create(
    <Loading />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
