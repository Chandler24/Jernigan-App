import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';

import VisitedScreen from './visited'
import LogoTitle from './../components/logotitle'

class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <FontAwesome name="user-circle-o" size={150} color='#ffffff' />
                <Text style={styles.usernameText}>Jay Edwards</Text>
                <Text style={styles.residenceText}>New York</Text>
                <Text style={styles.aboutText}>My name is Jay Edwards, and I love to travel. My biggest passion is traveling the world and experiencing new adventures and cultures. I live for it. I live in New York, but most years I manage to get three months off from my job to travel the world and write about what I see, hear, feel and do. Then I go back to work with my heart full and start saving and planning for my next adventure to a new destination.</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Visited')} >
                    <Text style={styles.buttonText} >Visited Locations</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => alert('Edit Profile Not Implemented')}>
                    <Text style={styles.buttonText} >Edit Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default createStackNavigator({
    Profile: {
        screen: Profile
    },
    Visited: {
      screen: VisitedScreen
    },   
    },
    {
        initialRouteName: 'Profile',
        navigationOptions: {
            headerTitle: LogoTitle,
            headerStyle: {
                backgroundColor: '#005ccb',
            },
            headerTintColor: '#ffffff'
          }
    }
  );

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

    usernameText: {
        color: '#ffffff',
        fontSize: 45,
        fontWeight: '500',
        textAlign: 'center',
    },

    residenceText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },

    aboutText: {
        color: '#ffffff',
        fontSize: 14,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    button: {
        width: 300,
        height: 50,
        marginTop: 20,
        backgroundColor: '#005ccb',
        borderRadius: 25,
        paddingVertical: 9
    },

    headerImage: {
        width: 140, 
        height: 60,
        marginBottom: 12,
        resizeMode: 'contain',
        alignSelf: 'center',
  
    }
});