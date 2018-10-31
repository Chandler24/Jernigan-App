import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default class CommentElement extends Component {
   render() {
    var date = new Date().toLocaleString()
        return (
            <View style={styles.favoriteElement}>
              <FontAwesome style={{ marginTop: 5, marginBottom: 5, marginLeft: 5}} name="user-circle-o" size={40} color='#ffffff' />
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
      backgroundColor: '#ff586e',
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
      marginRight:50
    },

    commentbackground: {
      backgroundColor: 'white',
       borderRadius: 5, 
       marginLeft: 10, 
       marginVertical:2,   
       maxWidth: '90%',
       minWidth: '90%'
    },

    timestamp: {
      color: '#ffffff',
      fontSize: 8,
      marginLeft: 10,
      marginRight: 50,
      fontStyle: 'italic',
      marginBottom: 5
  },
});