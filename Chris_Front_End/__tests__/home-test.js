import 'react-native';
import React from 'react';
import Home from '../src/pages/home';
import renderer from 'react-test-renderer';

it ('renders correctly', () => {
  const snap = renderer.create(
    <Home />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
