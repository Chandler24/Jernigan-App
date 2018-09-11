import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default class Login extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../images/logo.png')}/>
                <View>
                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder="Username"
                        placeholderTextColor= 'rgba(255,255,255,0.75)'
                        selectionColor= 'rgba(255,255,255,0.75)'/>
                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder="Password"
                        secureTextEntry = {true}
                        placeholderTextColor= 'rgba(255,255,255,0.75)'
                        selectionColor= 'rgba(255,255,255,0.75)'/>
                    <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Home')}>
                        <Text style={styles.buttonText} >Log In</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text 
                        style={styles.signupText} 
                        onPress={()=>this.props.navigation.navigate('Signup')}>
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
        width:300,
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
        width:300,
        height: 50,
        backgroundColor: '#005ccb',
        borderRadius: 25,   
        paddingVertical: 9     
    },

    logo: {
        margin:50
    }
  }); 