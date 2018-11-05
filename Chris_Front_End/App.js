import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

import LoginScreen from './src/pages/login'
import SignupScreen from './src/pages/signup'
import HomeScreen from './src/pages/home'
console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <AppRouteNavigator />
    );
  }
}

const AppRouteNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
  Home: HomeScreen,
});
