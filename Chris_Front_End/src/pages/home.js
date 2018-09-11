import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import MapScreen from './map'
import ProfileScreen from './profile'
import FavoritesScreen from './favorites'
import { Icon } from 'native-base';

export default class Home extends Component {
    render() {
        return(
            <TabNavigator/>
        )
    }
}

const TabNavigator = createBottomTabNavigator({
    Map: {
    screen: MapScreen,
    navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-map" color={tintColor} size={24} />
        )}
    },
    Profile: {
    screen: ProfileScreen,
    navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" color={tintColor} size={24} />
        )}
    },
    Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-star" color={tintColor} size={24} />
        )}
    },
},{
    initialRouteName: 'Map',
    order: ['Profile', 'Map', 'Favorites'],
    tabBarOptions: {
        activeTintColor: 'orange',
        inactiveTintColor: 'white',
        showIcon: true,
        labelStyle: {
            fontSize: 15
        },
        tabStyle: {
            height: 55
          },
        style: {
            backgroundColor: '#005ccb',
            borderTopWidth: 2,
            height: 60
        }
    }
});