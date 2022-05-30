import React from "react";
import renderer from 'react-test-renderer';
import LinkT from '../index';

describe('LinkT', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<LinkT page="https://example.com">Example Site</LinkT>)
      .toJSON();
      expect(tree).toMatchSnapshot(``);
  });
});

