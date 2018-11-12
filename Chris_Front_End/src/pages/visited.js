import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import LogoTitle from './../components/logotitle'
import './global'
import FavElement from '../components/favElement'

export default class Visited extends Component {

  /* Aligns the header text with back button */
  static navigationOptions = {
    headerRight: <View/>
  }

  /* Envokes on page load */
  componentWillMount() {
    this.loadVisitedLocations()
  }

  /* Loads all comments of current location */
  async loadVisitedLocations () {
    // Endpoint not finished yet >:O
    /*
    const command = global.url + "api/Location/GetVisitedLocations?userId=" + global.userID;
    const response = await fetch(command, {method: 'POST'});
    
    if (!response.ok) {
      alert("Server Down");
      throw Error(response.statusText);
    }
    
    var locations = await response.json();
    */
    var locations = require('../testdata/account/visitedRequest.json');
    visitedArray = []

    for (var i = 0; i < Object.keys(locations.visitedLocations).length; i++) {
      visitedArray.push(<FavElement
        key = {i} 
        imageUri={locations.visitedLocations[i].image} 
        name={locations.visitedLocations[i].title}/>)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <LogoTitle/>
        <View>
          <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <View style={{margin : 6}}/>
            {visitedArray}
            <View style={{marginBottom: 150}}></View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E9C46A'
  },

  headerText: {
    color: '#ffffff',
    fontSize: 40,
    marginTop: 5,
    fontWeight: '500',
    textAlign: 'center',
  },

  header: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});