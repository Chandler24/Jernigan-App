import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import './global'
import VisitedScreen from './visited'
import EditScreen from './editProfile'
import LogoTitle from './../components/logotitle'

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { profileData:{} };
    this.loadProfile = this.loadProfile.bind(this);
  }

  /* Envokes on page load */
  componentWillMount() {
    this.loadProfile()
  }

  /* Loads all comments of current location 
  Idea: id argument is passed in, generarate profiel of that id
  otherwise get profile of host user
  */
  async loadProfile() {
/*
    const command = global.url + "api/Account/GetUserAccountInfo?userId=" + global.userID;
    const response = await fetch(command, {method: 'POST'});
    
    if (!response.ok) {
      alert("Server Down");
      throw Error(response.statusText);
    }
    
    this.state.profileData = await response.json();
*/
    this.state.profileData = require('../testdata/account/profileRequest.json');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, maxHeight:170, width: "100%"}}>
          <Image style={styles.avatars} source={require('../avatars/9.png')}/>
        </View>
        <View style={{flex: .5}}>
          <Text style={styles.usernameText}>{this.state.profileData.username}</Text>
          <Text style={styles.residenceText}>{this.state.profileData.por}</Text>
          <Text style={styles.aboutText}>{this.state.profileData.bio}</Text>
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
        backgroundColor: '#264653',
      },
      headerTintColor: '#ffffff'
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E76F51',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#E9C46A',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

  usernameText: {
    color: '#ffffff',
    fontSize: 45,
    fontWeight: '500',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  residenceText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  aboutText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    margin: 10
  },

  button: {
    width: 310,
    height: 50,
    marginTop: 20,
    backgroundColor: '#2A9D8F',
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
    margin: 10
  },
});