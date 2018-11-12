import React, { Component } from 'react';
import { TextInput , StyleSheet,  ToastAndroid, Text, View, TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo';
import LogoTitle from './../components/logotitle'
import './global'

export default class Edit extends Component {

  // Aligns the header text with back button
  static navigationOptions = {
    headerRight: <View/>
  }

  constructor(props) {
    super(props);
    this.state = {
      bioText: "",
      cityOfResidence: "",
      image: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pickImage = this.pickImage.bind(this);
  }

  // Alows user to pick an image from their phone 
  async pickImage () {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState( {image : result.uri})
    } 
    console.log(result);
  }

  // Submits the edited fields to the server
  async handleSubmit () {
 
    if (global.offline == false) {
      const command = global.url + "/api/Account/UpdateProfile?userId=" + global.userID + "&image=" + this.state.image + "&bio=" + this.state.bioText+ "&cityOfResidence=" + this.state.cityOfResidence;
      const response = await fetch(command, {method: 'POST'});
      
      if (!response.ok) {
        alert("Server Down");
        throw Error(response.statusText);
      }
      
      const data = await response.json();

      if (data == true) {
        ToastAndroid.showWithGravity(
          'Profile Updated',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        this.props.navigation.navigate('Profile')
      } else {
        ToastAndroid.showWithGravity(
          'Error Updating Profile',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    } else {
      alert("Feature Unavailable in Offline Mode")
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <LogoTitle/>
        <View style={{marginBottom: 75}}/>
        <View style={{ alignItems: 'center',justifyContent: 'center' }}>
          <View style={{marginBottom: 10}}/>
          <Text style={styles.titleText} >Place of Residence</Text>
          <TextInput style={styles.inputBoxsm}
            onChangeText={(value) => this.setState({cityOfResidence: value})}
            value={this.state.cityOfResidence}
            multiline={true}
            underlineColorAndroid='rgba(0,0,0,0)'
            selectionColor='rgba(255,255,255,0.75)'/>
          <Text style={styles.titleText} >Bio</Text>
          <TextInput style={styles.inputBox}
            onChangeText={(value) => this.setState({bioText: value})}
            value={this.state.bioText}
            multiline={true}
            underlineColorAndroid='rgba(0,0,0,0)'
            selectionColor='rgba(255,255,255,0.75)' />
          <TouchableOpacity style={styles.button} onPress={this.pickImage}>
            <Text style={styles.buttonText} >Edit Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.buttonText} >Submit</Text>
          </TouchableOpacity>
          <View style={{marginBottom: 10}}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E76F51',
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