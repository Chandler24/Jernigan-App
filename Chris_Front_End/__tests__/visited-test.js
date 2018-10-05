import 'react-native';
import React from 'react';
import Visited from '../src/pages/visited';
import renderer from 'react-test-renderer';

it ('renders correctly', () => {
  const snap = renderer.create(
    <Visited />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});