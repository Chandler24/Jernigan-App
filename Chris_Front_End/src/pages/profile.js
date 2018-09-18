import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Profile extends Component {
    render() {
        return(
            <View style={styles.container}>
                <FontAwesome name="user-circle-o" size={200} color='#ffffff' />
                <Text style={styles.userText}>Username</Text>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} >Visited Locations</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} >Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} >Random Fact Nearby</Text>
                </TouchableOpacity>
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

    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },

    userText: {
        color: '#ffffff',
        fontSize: 45,
        fontWeight: '500',
        textAlign: 'center',
    },

    button: {
        width:300,
        height: 50,
        marginTop: 20,
        backgroundColor: '#005ccb',
        borderRadius: 25,   
        paddingVertical: 9     
    },
});