import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Foundation, Entypo, MaterialIcons } from '@expo/vector-icons';

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

const TabNavigator = createBottomTabNavigator({
    Map: {
        screen: MapScreen,
        navigationOptions: {
            tabBarLabel: 'Map',
            tabBarIcon: ({ tintColor }) => (
                <Foundation name="map" size={32} color={tintColor} />
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Entypo name="user" size={32} color={tintColor} />
            )
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="favorite" size={32} color={tintColor} />
            )
        }
    },
}, {
        initialRouteName: 'Map',
        order: ['Profile', 'Map', 'Favorites'],
        tabBarOptions: {
            activeTintColor: '#c61b43',
            inactiveTintColor: 'white',
            showIcon: true,
            labelStyle: {
                fontSize: 15
            },
            tabStyle: {
                height: 65
            },
            style: {
                backgroundColor: '#191919',
                height: 65
            }
        },
    });