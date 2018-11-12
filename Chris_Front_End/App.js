import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { Font } from 'expo';

import LoginScreen from './src/pages/login'
import SignupScreen from './src/pages/signup'
import HomeScreen from './src/pages/home'
console.disableYellowBox = true;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  } 

  async componentDidMount () {
    await Font.loadAsync({
      'Backpack': require('./src/components/backpack.ttf'),
    });
    this.setState({ isLoading: false })
  }

  render() {
    // Loading screen for location
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, backgroundColor: '#264653'}}/>
      );
    }

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
