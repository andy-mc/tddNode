import renderer from 'react-test-renderer';
import LinkT from '../index';

it('LinkT', () => {
  const tree = renderer
    .create(<LinkT></LinkT>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

