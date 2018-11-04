import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import './global'

import TimelineScreen from './timeline'
import FavElement from './../components/favElement'
import LogoTitle from './../components/logotitle'

class Favorites extends Component {

  /* Envokes on page load */
  componentWillMount() {
    this.loadFavorites()
  }

  /* Loads all favorites of current user */
  loadFavorites = () => {
    var locations = require('../testdata/account/favoritesRequest.json');
    favArray = []

    for (var i = 0; i < Object.keys(locations.favoriteLocations).length; i++)
    {
      favArray.push(<FavElement
        key = {i} 
        imageUri={locations.favoriteLocations[i].image} 
        name={locations.favoriteLocations[i].title}/>)
    }
  }

    render() {
      return (
        <View style={styles.container}>
          <View>
              <Text style={styles.header}> (Press the name of a location to view it)</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{margin : 6}}/>
                {favArray}
                <View style={{marginBottom: 30}}></View>
              </ScrollView>
          </View>
        </View>
    )
  }
}

export default createStackNavigator({
  Favorites: {
    screen: Favorites
  },
  Timeline: {
    screen: TimelineScreen
  },   
},{
    initialRouteName: 'Favorites',
    navigationOptions: {
      headerTitle: LogoTitle,
      headerStyle: {
        backgroundColor: '#191919',
      },
      headerTintColor: '#ffffff',
      }
  }
 );

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#3f3f3f'
  },

  header: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});