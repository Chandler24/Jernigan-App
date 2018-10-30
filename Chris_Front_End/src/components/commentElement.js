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
                <Text style= {styles.username} >Username</Text>
                <Text style={styles.blockText} >{this.props.comment} </Text>
                <Text style={styles.timestamp} >{date} </Text>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    favoriteElement: {
      flexDirection: 'row', 
      flex: 1,
      borderBottomColor: 'white',
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
    },

    blockText: {
      color: '#ffffff',
      fontSize: 14,
      marginLeft: 10,
      marginRight: 50
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