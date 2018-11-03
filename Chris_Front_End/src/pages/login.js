import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';
import './global'

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    onLoginSubmit = () => {
        var username = this.state.username;
        var password = this.state.password;
        var command = global.url + "/api/Account/SignIn?username=" + username + "&password=" + password;
        
        fetch(command, { 
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
        },
        // Parces json data from server response
        }).then((response) => {
            if (!response.ok) {
                alert("Server Down");
                throw Error(response.statusText);
            }        
            return response.json();
        })
        // plays with the parsed json data and performs some function.
        .then((responseJson) => {
            if (responseJson.SignInSuccessful == true) {

                var customData = require('../testdata/account/signInRequest.json');
                global.userID = customData.userId;
                
                this.props.navigation.navigate('Home')
            } else { 
                alert("Invalid Username or Password");
        }           
        }).catch((error) => {
            console.warn(error);
        });
    }
    render() {

        if (this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
        }

        return (
            <View style={styles.container}>
                <View style={{flex:1, width: "100%", bottom: 15}}>
                    <LottieView source={require('../images/world_locations')} autoPlay/>
                </View>
                <View style={{flex:.5, width: "100%", bottom: 75}}>
                    <Image style={styles.logo} source={require('../images/logo.png')} />
                </View>
                <View style={{flex:1, bottom: 75}}>
                    <TextInput style={styles.inputBox}
                        onChangeText={(value) => this.setState({username: value})}
                        value={this.state.username}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Username"
                        placeholderTextColor='rgba(255,255,255,0.75)'
                        selectionColor='rgba(255,255,255,0.75)'
                        returnKeyType = { "next" } 
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                        blurOnSubmit={false} />
                    <TextInput style={styles.inputBox}
                        onChangeText={(value) => this.setState({password: value})}
                        value={this.state.password}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor='rgba(255,255,255,0.75)'
                        selectionColor='rgba(255,255,255,0.75)'
                        returnKeyType = { "done" } 
                        ref={(input) => { this.secondTextInput = input; }}/>
                    <TouchableOpacity style={styles.button} onPress={this.onLoginSubmit}>
                        <Text style={styles.buttonText} >Log In</Text>
                    </TouchableOpacity>
                    <Text
                        style={styles.signupText}
                        onPress={() => this.props.navigation.navigate('Signup')}>
                        Don't have an Account? Sign up
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'rgb(21,50,133)',
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
        color: '#ffffff',
        
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },

    button: {
        width: 300,
        height: 50,
        backgroundColor: 'rgb(248, 147, 48)',
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