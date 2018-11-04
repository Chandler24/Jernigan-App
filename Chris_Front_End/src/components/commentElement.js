import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class CommentElement extends Component {
  render() {
    var date = new Date().toLocaleString() 
      return (
        <View style={styles.favoriteElement}>
          <View>
            <Text style={styles.username}>{this.props.username}</Text>
            <View style={styles.commentbackground}>
              <Text style={styles.blockText}>{this.props.comment} </Text>
            </View>
            <Text style={styles.timestamp}>{date}</Text>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  favoriteElement: {
    flexDirection: 'row', 
    flex: 1,
    backgroundColor: 'rgb(21,50,133)',
    borderRadius: 5,
    margin: 10,
    elevation: 5
  },

  username: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  blockText: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 10,
    marginRight:10
  },

  commentbackground: {
    backgroundColor: 'white',
      borderRadius: 5, 
      marginHorizontal: 10, 
      marginVertical:2,   

  },

  timestamp: {
    color: '#ffffff',
    fontSize: 8,
    marginLeft: 10,
    marginRight: 50,
    fontStyle: 'italic',
    marginBottom: 5
  },

  avatars: {
    flex:1,
    width: 50,
    height: 50,
    resizeMode: 'contain',

  },
});