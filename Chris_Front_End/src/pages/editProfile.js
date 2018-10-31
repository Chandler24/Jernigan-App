import React, { Component } from 'react';
import { TextInput , StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import './global'

export default class Edit extends Component {

    // Aligns the header text with back button
    static navigationOptions = {
      headerRight: <View/>
    }

    state = {
        pic: "",
        bioText: "",
        por: ""
    };
     
    handleSubmit = () => {

    };

    render() {

        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <FontAwesome  style={{margin: 15}} name="user-circle-o" size={120} color='#ffffff' />
                    <FontAwesome  style={{margin: 15}} name="user-circle-o" size={120} color='#ffffff' />
                    <FontAwesome  style={{margin: 15}} name="user-circle-o" size={120} color='#ffffff' />
                    <FontAwesome  style={{margin: 15}} name="user-circle-o" size={120} color='#ffffff' />
                    <FontAwesome  style={{margin: 15}} name="user-circle-o" size={120} color='#ffffff' />
                    <FontAwesome  style={{margin: 15}} name="user-circle-o" size={120} color='#ffffff' />
                    <FontAwesome  style={{margin: 15}} name="user-circle-o" size={120} color='#ffffff' />
                    <FontAwesome  style={{margin: 15}} name="user-circle-o" size={120} color='#ffffff' />
                    <FontAwesome  style={{margin: 15}} name="user-circle-o" size={120} color='#ffffff' />
                    <FontAwesome  style={{margin: 15}} name="user-circle-o" size={120} color='#ffffff' />
                </ScrollView>
                <Text style={styles.buttonText} >Place of Residence</Text>
                <TextInput style={styles.inputBoxsm}
                    onChangeText={this.changeTextHandler}
                    value={this.state.workingComment}
                    multiline={true}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    selectionColor='rgba(255,255,255,0.75)' />
                <Text style={styles.buttonText} >Bio</Text>
                <TextInput style={styles.inputBox}
                    onChangeText={this.changeTextHandler}
                    value={this.state.workingComment}
                    multiline={true}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    selectionColor='rgba(255,255,255,0.75)' />
                <TouchableOpacity style={styles.button} onPress={this.showDialog}>
                    <Text style={styles.buttonText} >Submit</Text>
                </TouchableOpacity>
                <View style={{marginVertical: 10}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#3f3f3f',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },

    aboutText: {
        color: '#ffffff',
        fontSize: 14,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    button: {
        width: 300,
        height: 50,
        marginTop: 20,
        backgroundColor: '#c61b43',
        borderRadius: 5,
        paddingVertical: 11,
        elevation: 5
    },

    headerImage: {
        width: 140, 
        height: 60,
        marginBottom: 12,
        resizeMode: 'contain',
        alignSelf: 'center',
  
    },

    inputBox: {
      width: "90%",
      height: 150,
      backgroundColor: '#191919',
      borderRadius: 5,
      paddingHorizontal: 20,
      color: '#ffffff',
      borderColor:'#c61b43',
      borderWidth: 2
    },

    inputBoxsm: {
      width: "90%",
      height: 50,
      backgroundColor: '#191919',
      borderRadius: 5,
      paddingHorizontal: 20,
      color: '#ffffff',
      borderColor:'#c61b43',
      borderWidth: 2,
      marginBottom: 15
    }
});