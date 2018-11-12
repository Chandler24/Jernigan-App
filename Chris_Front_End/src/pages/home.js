import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

import MapScreen from './map'
import ProfileScreen from './profile'
import FavoritesScreen from './favorites'

export default class Home extends Component {
  render() {
    return (
      <TabNavigator />
    )
  }
}

/* Adds bottom tab navigator to switch between Profile, Map, and Favorites pages */
const TabNavigator = createBottomTabNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="map-o" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <SimpleLineIcons name="user" size={30} color={tintColor} />
      )
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="heart-o" size={30} color={tintColor} />
      )
    }
  },
},{
  /* TabNavigator Config */
  initialRouteName: 'Map',
  order: ['Profile', 'Map', 'Favorites'],
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#E9C46A',
    inactiveTintColor: 'white',
    showIcon: true,
    labelStyle: {
      fontSize: 15
    },
    tabStyle: {
      height: 55
    },
    style: {
      backgroundColor: '#264653',
      height: 55,
      borderTopWidth:1, 
      elevation: 15
    }
  },
});