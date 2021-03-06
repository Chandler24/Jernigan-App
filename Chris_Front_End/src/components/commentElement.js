import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* This is a comment element that will be added evry time a users submits a comment */
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
    backgroundColor: '#E76F51',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    elevation: 5,
  },
  
  username: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },

  blockText: {
    color: '#264653',
    fontSize: 14,
    marginLeft: 10,
    marginRight:10
  },

  commentbackground: {
    backgroundColor: '#ffffff',
      borderRadius: 5, 
      marginHorizontal: 10, 
      marginVertical:2,   
      minWidth: "94%"
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