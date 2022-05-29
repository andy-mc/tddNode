import React from "react";
import renderer from 'react-test-renderer';
import LinkT from '../index.jsx';

it('LinkT', () => {
  const tree = renderer
    .create(<LinkT address="google.com"></LinkT>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

