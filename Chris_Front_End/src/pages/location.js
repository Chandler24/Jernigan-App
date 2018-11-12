import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight, ToastAndroid , Modal } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import LottieView from 'lottie-react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import ImageViewer from 'react-native-image-zoom-viewer';
import LogoTitle from './../components/logotitle'
import { Font } from 'expo';

export default class Location extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      locationData:{},
      isLoading: true,
      showAlertFail: false,
      imageView: false
    };
    this.loadLocation = this.loadLocation.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.submitRating = this.submitRating.bind(this);
  } 

  // Aligns the header text with back button
  static navigationOptions = {
    headerRight: <View/>
  }

  /* Envokes on page load */
  componentWillMount() {
    this.loadLocation()
  }

  /* Loads current location*/
  async loadLocation() {

    data = []

    // Grabs the name of the location passed from Map Marker
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'unknown')
    const coordinate = navigation.getParam('coordinates', null)

    if (global.offline == false) {
      // Uses location name in api cal to get location info object
      const command = global.url + "/api/Location/GenerateTimeline?locationName=" + name;
      const response = await fetch(command, {method: 'POST'});

      if (!response.ok) {
        this.setState({ showAlertFail: true });
        throw Error(response.statusText);
      }

      this.state.locationData = await response.json();

      console.log(this.state.locationData);

      // Notifies user is a timeline is unavailable for the current location
      if (this.state.locationData.Info.length < 1 || this.state.locationData.Info == undefined){
        this.setState({ showAlertFail: true });
        return;
      }

      this.setState({ locationName: name})
      this.setState({ isLoading: false })
    } else {
      // Offline Mode
      this.setState({ locationName: name})
      this.state.locationData = require('../testdata/location/locationRequest.json');
      this.setState({ isLoading: false })
    }

    if (coordinate != null) {
      // add location to database
    }
  }

  /* Adds current location to user's favorites */ 
  async addToFavorites () {
    // Endpoint not made yet :\
    /*
    const command = global.url + "api/Location/AddFavoriteLocation?locationId=" + passedIn.locationId + "&userId" + global.userId;
    const response = await fetch(command, {method: 'POST'});
    
    if (!response.ok) {
      alert("Server Down");
      throw Error(response.statusText);
    } else {
      alert('Added to Favorites!')
    }
    */
    ToastAndroid.showWithGravity(
      'Added of Favorites!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    )
  }

  /* Submits User's picked rating */
  async submitRating () {
  // Endpoint not made yet :\
  /*
    const command = global.url + "api/Location/submitRating?rating=" + passedIn.rating + "&userId" + global.userId;
    const response = await fetch(command, {method: 'POST'});
    
    if (!response.ok) {
      alert("Server Down");
      throw Error(response.statusText);
    } else {
      alert('Thanks!')
    }
  */
  }

  // Used with "Unavailable Timeline", closes alert and navigates back to Map
  closeAndReturn () {
    this.setState({ showAlertFail: false })
    this.props.navigation.navigate('Map')
  }

  // Opens the image viewer and notifies user how to close
  openImage () {
    ToastAndroid.show(
      'Swipe Down To Close',
      ToastAndroid.LONG,
    );
    this.setState({ imageView: true })
  }

  render() {

    const images = [{url: this.state.locationData.Image}]

    // Loading screen for location
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, backgroundColor: '#E76F51'}}>
          <LogoTitle/>
          <LottieView style={{paddingTop:20}} source={require('../images/world_locations')} autoPlay/>
          <AwesomeAlert
          show={this.state.showAlertFail}
          contentContainerStyle={{bottom: 20}}
          showProgress={false}
          title= "Timeline Unavailable"
          titleStyle= {{textAlign: 'center'}}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonColor="#E76F51"
          onConfirmPressed={() => { this.closeAndReturn() }}
        />
        </View>
      );
    }

    // Location Screen
    return (
      <View style={styles.container}>
        <Modal visible={this.state.imageView} transparent={true} onRequestClose={() => this.setState({ imageView: false })}>
          <ImageViewer onCancel={() => this.setState({ imageView: false })} enableSwipeDown={true} imageUrls={images}/>
        </Modal>
        <TouchableHighlight onPress={() => {this.openImage()}} style={{flex:1, width: '100%', elevation: 5}}>
          <Image resizeMode="cover" source={{uri : this.state.locationData.Image}} style={styles.image}/>
        </TouchableHighlight>
        <Text style={styles.titleText}>{this.state.locationName}</Text>
        <AirbnbRating 
          style={{maxHeight:60}}
          reviews={[]} 
          ratingColor={'#E9C46A'}
          defaultRating= '5'/>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Timeline', {data: this.state.locationData.Info})} >
          <Text style={styles.buttonText} > View Timeline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.addToFavorites}>
          <Text style={styles.buttonText} >Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Comment')} >
          <Text style={styles.buttonText} >Comment</Text>
        </TouchableOpacity>
        <View style={{marginBottom: 20}}/>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#2A9D8F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontFamily: 'Backpack',
    color: '#E9C46A',
    fontSize: 40,
    textAlign: 'center',
  },

  titleText: {
    marginTop: 5,
    color: '#ffffff',
    width: '100%',
    fontSize: 55,
    fontFamily: 'Backpack',
    textAlign: 'center',
    marginHorizontal: 10,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginBottom: -30
  },

  button: {
    width: 300,
    height: 50,
    marginTop: 20,
    backgroundColor: '#E76F51',
    borderRadius: 5,
    paddingVertical: 4,
    elevation: 5
  },

  image: {
    flex:1,
    width: undefined,
    height: undefined   
  },
});