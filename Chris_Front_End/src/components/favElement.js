import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/* This is the components that make up the favorites and visited page */
export default class FavElement extends Component {
  render() {
    return (
      <View style={styles.favoriteElement}>
        <Image source={{ uri: this.props.imageUri}} style={styles.image} />
        <Text style={styles.title} >{this.props.name} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  favoriteElement: {
      height: 130,
      marginBottom: 10,
  },

  image: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgb(248, 147, 48)',
    flex: 1,
    marginHorizontal: 10,
    width: null,
    height: null,
    resizeMode: 'cover',
  },

  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -2, height: 4},
    textShadowRadius: 10,
    paddingBottom: 20
  }
});