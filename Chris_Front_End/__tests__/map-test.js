
import 'react-native';
import React from 'react';
import Map from '../src/pages/map';
import renderer from 'react-test-renderer';

it ('renders correctly', () => {
  const snap = renderer.create(
    <Map />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
