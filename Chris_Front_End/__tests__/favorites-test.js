
import 'react-native';
import React from 'react';
import Favorites from '../src/pages/favorites';
import renderer from 'react-test-renderer';

it ('renders correctly', () => {
  const snap = renderer.create(
    <Favorites />
  ).toJSON();
 // expect(snap).toMatchSnapshot();
});

