import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import LottieView from 'lottie-react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class Location extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      locationData:{},
      isLoading: true,
      showAlertFav: false,
      showAlertFail: false
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

    // Uses location name in api cal to get location info object
    const command = global.url + "/api/Location/GenerateTimeline?locationName=" + name;
    const response = await fetch(command, {method: 'POST'});

    if (!response.ok) {
      this.setState({ showAlertFail: true });
      throw Error(response.statusText);
    }

    this.state.locationData = await response.json();

    console.log(this.state.locationData);
    this.setState({ locationName: name})
    this.setState({ isLoading: false })
    
    if (coordinate != null) {
      // add location to datavase
    }
  }

  /* Adds current location to user's favorites */ 
  async addToFavorites () {
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
    this.setState({ showAlertFav: true });
  }

  /* Submits User's picked rating */
  async submitRating () {
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

  closeAndReturn () {
    this.setState({ showAlertFail: false })
    this.props.navigation.navigate('Map')
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20, backgroundColor: '#E76F51'}}>
          <LottieView source={require('../images/world_locations')} autoPlay/>
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

    return (
      <View style={styles.container}>
        <Image source={{uri : this.state.locationData.Image}} style={styles.image} />
        <Text style={styles.titleText}>{this.state.locationName}</Text>
        <AirbnbRating 
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
        <AwesomeAlert
          show={this.state.showAlertFav}
          contentContainerStyle={{bottom: 20}}
          showProgress={false}
          title= "Added to Favorites!"
          titleStyle= {{textAlign: 'center'}}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonColor="#E76F51"
          onConfirmPressed={() => { this.setState({ showAlertFav: false }) }}
        />
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
    color: '#E9C46A',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

  titleText: {
    marginTop: 5,
    color: '#ffffff',
    fontSize: 45,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: -25,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  button: {
    width: 300,
    height: 50,
    marginTop: 20,
    backgroundColor: '#E76F51',
    borderRadius: 5,
    paddingVertical: 11,
    elevation: 5
  },

  image: {
    flex: 1,
    width: '100%',
  },
});