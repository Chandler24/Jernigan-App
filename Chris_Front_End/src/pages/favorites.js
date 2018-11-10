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
  async loadFavorites () {
/*
    const command = global.url + "api/Location/GetVisitedLocations?userId=" + global.userID;
    const response = await fetch(command, {method: 'POST'});
    
    if (!response.ok) {
      alert("Server Down");
      throw Error(response.statusText);
    }
    
    var locations = await response.json();
*/
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
          <LogoTitle/>
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{margin : 6}}/>
              {favArray}
              <View style={{marginBottom: 150}}/>
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
    headerMode: "float",
    navigationOptions: {
      header: null
    }
  }
 );

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E9C46A'
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