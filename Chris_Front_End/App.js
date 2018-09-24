import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

import LoginScreen from './src/pages/login'
import SignupScreen from './src/pages/signup'
import HomeScreen from './src/pages/home'

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
  Home: HomeScreen
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#2e88ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
