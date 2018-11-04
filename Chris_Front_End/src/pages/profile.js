import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
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
},{
    initialRouteName: 'Profile',
    navigationOptions: {
      headerTitle: LogoTitle,
      headerStyle: {
        backgroundColor: '#EFE8D5',
      },
      headerTintColor: '#ffffff'
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#938c72',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#938c72',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

  usernameText: {
    color: '#EFE8D5',
    fontSize: 45,
    fontWeight: '500',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  residenceText: {
    color: '#EFE8D5',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  aboutText: {
    color: '#EFE8D5',
    fontSize: 14,
    textAlign: 'center',
    margin: 10
  },

  button: {
    width: 310,
    height: 50,
    marginTop: 20,
    backgroundColor: '#DED7C4',
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