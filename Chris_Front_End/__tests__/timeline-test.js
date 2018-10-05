import 'react-native';
import React from 'react';
import Timeline from '../src/pages/timeline';
import renderer from 'react-test-renderer';

it ('renders correctly', () => {
  const snap = renderer.create(
    <Timeline />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});