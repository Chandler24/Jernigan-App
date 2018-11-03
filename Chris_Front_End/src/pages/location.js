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
                <Text style={styles.userText}>{locationData.title}</Text>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#3f3f3f',
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
        marginBottom: -25,
    },

    button: {
        width: 300,
        height: 50,
        marginTop: 20,
        backgroundColor: 'rgb(248, 147, 48)',
        borderRadius: 5,
        paddingVertical: 11,
        elevation: 5
    },

    image: {
      borderRadius: 50,
      flex: .8,
      width: '90%',
      borderWidth: 2,
      borderColor: 'rgb(248, 147, 48)'
  },
});