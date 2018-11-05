import React, { Component } from 'react';
import { TextInput , StyleSheet,  Image, Text, View, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import './global'

export default class Edit extends Component {

  // Aligns the header text with back button
  static navigationOptions = {
    headerRight: <View/>
  }

  constructor(props) {
    super(props);
    this.state = {
      pic: "",
      bioText: "",
      por: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit () {
    /*
    const command = global.url + "/api/Account/updateProfile?pic=" + this.state.pic + "&bio=" + this.state.bioText+ "&por=" + this.state.por;
    const response = await fetch(command, {method: 'POST'});
    
    if (!response.ok) {
      alert("Server Down");
      throw Error(response.statusText);
    }
    
    const data = await response.json();
    */
    alert("Profile Updated")
    this.props.navigation.navigate('Profile')
  };

  render() {
    return (
      <View style={styles.container}>
        <FontAwesome  name="hand-o-down" size={40} color='#F4A261' />
        <ScrollView style={{maxHeight:150}} horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableHighlight syle={{maxWidth: 150}}>
            <Image style={styles.avatars} source={require('../avatars/1.png')}/>
          </TouchableHighlight>
          <TouchableHighlight syle={{maxWidth: 150}}>
            <Image style={styles.avatars} source={require('../avatars/2.png')}/>
          </TouchableHighlight>
          <TouchableHighlight syle={{maxWidth: 150}}>
            <Image style={styles.avatars} source={require('../avatars/3.png')}/>
          </TouchableHighlight>
          <TouchableHighlight syle={{maxWidth: 150}}>
            <Image style={styles.avatars} source={require('../avatars/4.png')}/>
          </TouchableHighlight>
          <TouchableHighlight syle={{maxWidth: 150}}>
            <Image style={styles.avatars} source={require('../avatars/5.png')}/>
          </TouchableHighlight>
          <TouchableHighlight syle={{maxWidth: 150}}>
            <Image style={styles.avatars} source={require('../avatars/6.png')}/>
          </TouchableHighlight>
          <TouchableHighlight syle={{maxWidth: 150}}>
            <Image style={styles.avatars} source={require('../avatars/7.png')}/>
          </TouchableHighlight>
          <TouchableHighlight syle={{maxWidth: 150}}>
            <Image style={styles.avatars} source={require('../avatars/8.png')}/>
          </TouchableHighlight>
          <TouchableHighlight syle={{maxWidth: 150}}>
            <Image style={styles.avatars} source={require('../avatars/9.png')}/>
          </TouchableHighlight>
        </ScrollView>
        <Text style={styles.titleText} >Place of Residence</Text>
        <TextInput style={styles.inputBoxsm}
          onChangeText={this.changeTextHandler}
          value={this.state.workingComment}
          multiline={true}
          underlineColorAndroid='rgba(0,0,0,0)'
          selectionColor='rgba(255,255,255,0.75)'/>
        <Text style={styles.titleText} >Bio</Text>
        <TextInput style={styles.inputBox}
          onChangeText={this.changeTextHandler}
          value={this.state.workingComment}
          multiline={true}
          underlineColorAndroid='rgba(0,0,0,0)'
          selectionColor='rgba(255,255,255,0.75)' />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText} >Submit</Text>
        </TouchableOpacity>
        <View style={{marginBottom: 10}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E76F51',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

  buttonText: {
    color: '#E9C46A',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

  avatars: {
    flex: 1,
    resizeMode:'contain'
  },

  button: {
    width: "90%",
    height: 50,
    marginTop: 20,
    backgroundColor: '#2A9D8F',
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
    borderWidth: 2,
    backgroundColor: '#ffffff',
    borderColor: "#264653",
    borderRadius: 10,
    elevation: 5,
    paddingHorizontal: 20,
    color: '#264653',
  },

  inputBoxsm: {
    width: "90%",
    height: 40,
    borderWidth: 2,
    backgroundColor: '#ffffff',
    borderColor: "#264653",
    borderRadius: 10,
    elevation: 5,
    paddingHorizontal: 20,
    color: '#264653',
    marginBottom: 5
  }
});