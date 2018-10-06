import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class Signup extends Component {

    state = {
        username: '',
        password: '',
        passwordConfirm: ''
    };

    onSignUpSubmit = () => {
        var username = this.state.username;
        var password = this.state.password;
        var passwordConfirm = this.state.passwordConfirm;

        if (password != passwordConfirm) {
            alert('Passwords do not match')
            return;
        }
        else {
            alert('Account Created!')
            this.props.navigation.navigate('Login')
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <View>
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
                        onChangeText={(value) => this.setState({passwordConfirm: value})}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="City of Residence"
                        secureTextEntry={true}
                        placeholderTextColor='rgba(255,255,255,0.75)' />
                    <TouchableOpacity style={styles.button} onPress={this.onSignUpSubmit}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View>
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
        textAlign: 'center'
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