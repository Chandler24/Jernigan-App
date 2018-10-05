
import 'react-native';
import React from 'react';
import Profile from '../src/pages/profile';
import renderer from 'react-test-renderer';

it ('renders correctly', () => {
  const snap = renderer.create(
    <Profile />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
