import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class Location extends Component {

  // Aligns the header text with back button
  static navigationOptions = {
    headerRight: <View/>
  }

  addToFavorites = () => {
    alert('Added to Favorites!')
  }

  render() {
    var locationData = require('../testdata/location/locationRequest.json');

    return (
      <View style={styles.container}>
        <Image source={{uri : locationData.image}} style={styles.image} />
        <Text style={styles.titleText}>{locationData.title}</Text>
        <AirbnbRating reviews={[]} defaultRating={locationData.rating} />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Timeline')} >
          <Text style={styles.buttonText} > View Timeline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.addToFavorites}>
          <Text style={styles.buttonText} >Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Comment')} >
          <Text style={styles.buttonText} >Comment</Text>
        </TouchableOpacity>
        <View style={{marginBottom: 20}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#938C72',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#938C72',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

  titleText: {
    marginTop: 5,
    color: '#EFE8D5',
    fontSize: 45,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: -25,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  button: {
    width: 300,
    height: 50,
    marginTop: 20,
    backgroundColor: '#DED7C4',
    borderRadius: 5,
    paddingVertical: 11,
    elevation: 5
  },

  image: {
    flex: 1,
    width: '100%',
  },
});