import 'react-native';
import React from 'react';
import Signup from '../src/pages/signup';
import renderer from 'react-test-renderer';

it ('renders correctly', () => {
  const snap = renderer.create(
    <Signup />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});