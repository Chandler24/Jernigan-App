import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    onLoginSubmit = () => {
        var username = this.state.username;
        var password = this.state.password;
        var hostip = "http://2c3b1175.ngrok.io"
        var command = hostip + "/api/Account/SignIn?username=" + username + "&password=" + password;
        fetch(command, { method: 'POST' })
        this.props.navigation.navigate('Home')
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
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <View>
                    <TextInput style={styles.inputBox}
                        onChangeText={(value) => this.setState({username: value})}
                        value={this.state.username}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Username"
                        placeholderTextColor='rgba(255,255,255,0.75)'
                        selectionColor='rgba(255,255,255,0.75)' />
                    <TextInput style={styles.inputBox}
                        onChangeText={(value) => this.setState({password: value})}
                        value={this.state.password}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor='rgba(255,255,255,0.75)'
                        selectionColor='rgba(255,255,255,0.75)' />
                    <TouchableOpacity style={styles.button} onPress={this.onLoginSubmit}>
                        <Text style={styles.buttonText} >Log In</Text>
                    </TouchableOpacity>
                </View>
                <View>
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
        backgroundColor: '#2e88ff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    signupText: {
        marginTop: 20,
        justifyContent: 'center',
        color: '#ffffff',
        alignItems: 'flex-end'
    },

    inputBox: {
        marginBottom: 20,
        width: 300,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 25,
        paddingHorizontal: 20,
        color: '#ffffff'
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
        backgroundColor: '#005ccb',
        borderRadius: 25,
        paddingVertical: 9
    },

    logo: {
        margin: 50
    }
}); 