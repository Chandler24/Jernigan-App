import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import './global'

export default class Signup extends Component {

    state = {
        username: '',
        password: '',
        passwordConfirm: ''
    };

    onSignUpSubmit = () => {
        var username = this.state.username;
        var password = this.state.password;
        var passConfirm = this.state.passwordConfirm;
        var location = this.state.location;
        var command = global.url + "/api/Account/SignUp?username=" + username + "&password=" + password + "&cityOfResidence=" + location;
        
        if (password != passConfirm)
        {
            alert("Passwords do not match")
            return
        }

        fetch(command, { 
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
        },
        // Parces json data from server response
        }).then((response) => response.json())
        // plays with the parsed json data and performs some function.
        .then((responseJson) => {
            if (responseJson.SignUpSuccessful == true){

                var customData = require('../testdata/account/signInRequest.json');
                global.userID = customData.userId;

                alert("Account successfully created")
                this.props.navigation.navigate('Home')
            } else {
                alert("Username already taken");
            }           
        })
        //catches any error.
        .catch((error) => {
            console.error(error);
        });
    }
    
    render() {

        return (
            <View style={styles.container}>
                <LottieView source={require('../images/gradient_animated_background')} style={{resizeMode:'cover'}}  autoPlay/>
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <View style={{flex:2}}>
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
                        onChangeText={(value) => this.setState({location: value})}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="City of Residence"
                        placeholderTextColor='rgba(255,255,255,0.75)' />
                    <TouchableOpacity style={styles.button} onPress={this.onSignUpSubmit}>
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
        backgroundColor: '#2e88ff',
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
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    },

    button: {
        width: 300,
        height: 50,
        backgroundColor: '#ff586e',
        borderRadius: 5,
        paddingVertical: 9,
        elevation: 5
    },

    logo: {
        flex:1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
        margin: 50
    }
}); 