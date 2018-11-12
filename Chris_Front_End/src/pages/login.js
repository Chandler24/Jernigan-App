import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ToastAndroid } from 'react-native';
import LottieView from 'lottie-react-native';
import './global'

// Fade in amimation
class FadeInView extends React.Component { 
  state = {
    fadeAnim: new Animated.Value(0),  
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 5000,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View style={{ ...this.props.style, opacity: fadeAnim }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  async onLoginSubmit () {
    
    if (global.offline == false) {
      const command = global.url + "/api/Account/SignIn?username=" + this.state.username + "&password=" + this.state.password;
      const response = await fetch(command, {method: 'POST'});
      
      if (!response.ok) {
        ToastAndroid.show(
          'Server Down',
          ToastAndroid.LONG,
        );;
        throw Error(response.statusText);
      }
      
      const data = await response.json();

      if (data.SignInSuccessful == true) {
        global.userID = data.UserId;
        global.username = this.state.usernme;
        this.props.navigation.navigate('Home')
      } else { 
        ToastAndroid.show(
          'Invalid Username or Password',
          ToastAndroid.LONG,
        );
      }
    } else {
      this.props.navigation.navigate('Home')
    }
  }

  /*
  Offline Mode Toggle
  This mode is here just in case the back-end and does not get completed or is buggy
  Allows the user to view all UI features without needing any api calls
  */
  toggleOfflineMode () {
    if (global.offline == true){
      ToastAndroid.show(
        'Online Mode',
        ToastAndroid.LONG,
      );
      global.offline = false
    } else {
      ToastAndroid.show(
        'Offline Mode',
        ToastAndroid.LONG,
      );
      global.offline = true
    }
  }

  render() {
    return (
      <View style={styles.welcomeContainer}>
        {/* Rotating Earth Animation */}
        <FadeInView style={{flex:1, width: "100%", bottom: 15}}>
          <TouchableOpacity style={{flex:1}} onPress={() => {this.toggleOfflineMode()}}>
            <LottieView source={require('../images/world_locations')} autoPlay/>
          </TouchableOpacity>
        </FadeInView>
        {/* Logo Title */}
        <FadeInView style={{flex:.5, width: "100%", bottom: 75}}>
          <Image style={styles.logo} source={require('../images/logo.png')} />
        </FadeInView>
        {/* Login Forum */}
        <FadeInView style={{flex:1, bottom: 75}}>
          <TextInput style={styles.welcomeInputBox}
            onChangeText={(value) => this.setState({username: value})}
            value={this.state.username}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Username"
            placeholderTextColor='rgba(255,255,255,0.75)'
            selectionColor='rgba(255,255,255,0.75)'
            returnKeyType = { "next" } 
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
            blurOnSubmit={false} />
          <TextInput style={styles.welcomeInputBox}
            onChangeText={(value) => this.setState({password: value})}
            value={this.state.password}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor='rgba(255,255,255,0.75)'
            selectionColor='rgba(255,255,255,0.75)'
            returnKeyType = { "done" } 
            ref={(input) => { this.secondTextInput = input; }}/>
          <TouchableOpacity style={styles.button1} onPress={this.onLoginSubmit}>
            <Text style={styles.button1Text} >Log In</Text>
          </TouchableOpacity>
          <Text
            style={styles.welcomeNavText}
            onPress={() => this.props.navigation.navigate('Signup')}>
            Don't have an Account? Sign up
          </Text>
        </FadeInView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flexGrow: 1,
    backgroundColor: '#264653',
    //backgroundColor: 'rgb(21,50,133)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeNavText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ffffff',
  },

  welcomeInputBox: {
    marginBottom: 20,
    width: 300,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    paddingHorizontal: 20,
    color: '#ffffff',
  },

  button1Text: {
    color: '#E9C46A',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

  button1: {
    width: 300,
    height: 50,
    backgroundColor: '#E76F51',
    //backgroundColor: 'rgb(248, 147, 48)',
    borderRadius: 5,
    paddingVertical: 11,
    elevation: 5
  },

  logo: {
    flex:1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    marginHorizontal: 10
  }
});