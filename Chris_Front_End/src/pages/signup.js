import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import './global'

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
      cityOfResidence: ''
    };
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
  }

  async onSignupSubmit () {

    // Check if passwords match
    if (this.state.password != this.state.passwordConfirm) {
      ToastAndroid.show(
        'Passwords do not match',
        ToastAndroid.LONG,
      );
      return
    }

    const command = global.url + "/api/Account/SignUp?email=" + this.state.email + "&username=" + this.state.username + "&password=" + this.state.password + "&passwordConfirm=" + this.state.passwordConfirm + "&cityOfResidence=" + this.state.cityOfResidence;
    const response = await fetch(command, {method: 'POST'});
    
    if (!response.ok) {
      ToastAndroid.show(
        'Server Down',
        ToastAndroid.LONG,
      );
      throw Error(response.statusText);
    }
    
    const data = await response.json();

    if (data.SignUpSuccessful == true) {
      ToastAndroid.show(
        'Successful',
        ToastAndroid.LONG,
      );
      this.props.navigation.navigate('Login')
    } else { 
      ToastAndroid.show(
        'Username already taken',
        ToastAndroid.LONG,
      );
    }
  }
    
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <View style={{flex:2}}>
        <TextInput style={styles.inputBox}
            onChangeText={(value) => this.setState({email: value})}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email"
            placeholderTextColor='rgba(255,255,255,0.75)' />
          <TextInput style={styles.inputBox}
            onChangeText={(value) => this.setState({username: value})}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Username"
            placeholderTextColor='rgba(255,255,255,0.75)' />
          <TextInput style={styles.inputBox}
            onChangeText={(value) => this.setState({password: value})}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor='rgba(255,255,255,0.75)' />
          <TextInput style={styles.inputBox}
            onChangeText={(value) => this.setState({passwordConfirm: value})}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor='rgba(255,255,255,0.75)' />
          <TextInput style={styles.inputBox}
            onChangeText={(value) => this.setState({cityOfResidence: value})}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="City of Residence"
            placeholderTextColor='rgba(255,255,255,0.75)' />
          <TouchableOpacity style={styles.button} onPress={this.onSignupSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text
            style={styles.signupText}
            onPress={() => this.props.navigation.navigate('Login')}>
            Back to Login
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#264653',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ffffff',
  },

  inputBox: {
    marginBottom: 20,
    width: 300,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    paddingHorizontal: 20,
    color: '#ffffff'
  },

  buttonText: {
    color: '#E9C46A',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: '#E76F51',
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
    margin: 10
  }
}); 