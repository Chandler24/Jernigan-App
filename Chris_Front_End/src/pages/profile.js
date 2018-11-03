import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';

import VisitedScreen from './visited'
import EditScreen from './editProfile'
import LogoTitle from './../components/logotitle'

class Profile extends Component {

    state = {
        dialogVisible: false,
        bioText: "My name is Jay Edwards, and I love to travel. My biggest passion is traveling the world and experiencing new adventures and cultures. I live for it. I live in New York, but most years I manage to get three months off from my job to travel the world and write about what I see, hear, feel and do. Then I go back to work with my heart full and start saving and planning for my next adventure to a new destination.",
        runningBioText: ""
    };

    showDialog = () => {
        this.setState({ dialogVisible: true });
    };
     
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
     
    handleSubmit = () => {
        // The user has pressed the "Submit" button
        this.setState({ bioText: this.state.runningBioText });
        this.setState({ dialogVisible: false });
    };

    render() {

        var profileData = require('../testdata/account/profileRequest.json');

        return (
            <View style={styles.container}>
                <View style={{flex:1, maxHeight:170, width: "100%"}}>
                    <Image style={styles.avatars} source={require('../avatars/5.png')}/>
                </View>
                <View style={{flex: .5}}>
                    <Text style={styles.usernameText}>{profileData.username}</Text>
                    <Text style={styles.residenceText}>{profileData.por}</Text>
                    <Text style={styles.aboutText}>{profileData.bio}</Text>
                </View>
                <View style={{flex: .5}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Visited')} >
                        <Text style={styles.buttonText} >Visited Locations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Edit')}>
                        <Text style={styles.buttonText} >Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                
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
    Edit: {
        screen: EditScreen
      },     
    },
    {
        initialRouteName: 'Profile',
        navigationOptions: {
            headerTitle: LogoTitle,
            headerStyle: {
                backgroundColor: '#191919',
            },
            headerTintColor: '#ffffff'
          }
    }
  );

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
        margin: 10
    },

    button: {
        width: 300,
        height: 50,
        marginTop: 20,
        backgroundColor: 'rgb(248, 147, 48)',
        borderRadius: 5,
        paddingVertical: 11,
        elevation: 5,
    },

    headerImage: {
        width: 140, 
        height: 60,
        marginBottom: 12,
        resizeMode: 'contain',
        alignSelf: 'center',
  
    },

    avatars: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        margin: 10,
      },
});