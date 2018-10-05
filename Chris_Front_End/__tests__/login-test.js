import 'react-native';
import React from 'react';
import Login from '../src/pages/login';
import renderer from 'react-test-renderer';

it ('renders correctly', () => {
  const snap = renderer.create(
    <Login />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});