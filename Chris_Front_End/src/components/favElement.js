import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/* This is the component that make up the favorites and visited page */
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
    backgroundColor: "#E76F51",
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10
  },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    paddingBottom: 5
  },
});