import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class Location extends Component {

    // Aligns the header text with back button
    static navigationOptions = {
      headerRight: <View/>
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/cityhall.jpg')} style={styles.image} />
                <Text style={styles.userText}>Orlando City Hall</Text>
                <AirbnbRating reviews={[]} />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Timeline')} >
                    <Text style={styles.buttonText} > View Timeline</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => alert('Added to Favorites!')}>
                    <Text style={styles.buttonText} >Favorite</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Comment')} >
                    <Text style={styles.buttonText} >Comment</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#2e88ff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },

    userText: {
        marginTop: 10,
        color: '#ffffff',
        fontSize: 45,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: -25
    },

    button: {
        width: 300,
        height: 50,
        marginTop: 20,
        backgroundColor: '#005ccb',
        borderRadius: 25,
        paddingVertical: 9
    },

    image: {
      borderRadius: 50,
      flex: .8,
      width: '95%',
      //height: null,
      //resizeMode: 'cover'
  },
});