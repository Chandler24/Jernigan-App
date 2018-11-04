import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import FavElement from '../components/favElement'

export default class Visited extends Component {

  // Aligns the header text with back button
  static navigationOptions = {
    headerRight: <View/>
  }

  render() {
    var locations = require('../testdata/account/visitedRequest.json');
    visitedArray = []

    for (var i = 0; i < Object.keys(locations.visitedLocations).length; i++)
    {
        visitedArray.push(<FavElement
            key = {i} 
            imageUri={locations.visitedLocations[i].image} 
            name={locations.visitedLocations[i].title}/>)
    }

    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.header}> (Press the name of a location to view it)</Text>
          <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <View style={{margin : 6}}/>
            {visitedArray}
            <View style={{marginBottom: 30}}></View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#3f3f3f'
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
    marginLeft: 10,
    marginRight: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});