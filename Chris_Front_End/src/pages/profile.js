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
                <FontAwesome name="user-circle-o" size={200} color='#ffffff' />
                <Text style={styles.userText}>Username</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Visited')} >
                    <Text style={styles.buttonText} >Visited Locations</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => alert('Edit Profile Not Implemented')}>
                    <Text style={styles.buttonText} >Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => alert('RFN Not Implemented')} >
                    <Text style={styles.buttonText} >Random Fact Nearby</Text>
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

    userText: {
        color: '#ffffff',
        fontSize: 45,
        fontWeight: '500',
        textAlign: 'center',
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