import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Location, Permissions } from 'expo';
import LottieView from 'lottie-react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

import CommentScreen from './comment'
import LocationScreen from './location'
import TimelineScreen from './timeline'
import LogoTitle from './../components/logotitle'

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      lat: null,
      long: null,
      markers: {},
      query: "",
      showAlert: false,
      alertTitle: ""
    };
    this.getLocationAsync = this.getLocationAsync.bind(this);
    this.search = this.search.bind(this);    
  };

  /* Envokes on page load */
  componentWillMount() {
    this.getLocationAsync();
    this.loadLocationsMarkers()
  }

  async getLocationAsync () {
    this.setState({ isLoading: true })
    await Permissions.askAsync(Permissions.LOCATION);
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    this.setState({ lat: location.coords.latitude });    
    this.setState({ long: location.coords.longitude });
    this.setState({ isLoading: false })
  };

  /* Loads all comments of current location */
  async loadLocationsMarkers() {
    
    markersArray = []
/*
    const command = global.url + "api/Location/GetAvailableTimelines?longitude=" + this.state.longitude + "&latitude=" + this.state.latitude;
    const response = await fetch(command, {method: 'POST'});
 
    if (!response.ok) {
      alert("Server Down");
      throw Error(response.statusText);
    }

    const markers = await response.json();
*/
    var markers = require('../testdata/location/nearbyLocationsRequest.json');
    this.setState({ markers: markers})

    for (var i = 0; i < markers.locations.length; i++) {
      markersArray.push (
        <MapView.Marker
        key = {markers.locations[i].title} 
        coordinate={{ latitude: markers.locations[i].latitude, longitude: markers.locations[i].longitude}}
        title={markers.locations[i].title}
        description={"Click here for timeline!"}
        onCalloutPress={(event) => this.goToLocation(event) }
        pinColor= '#E9C46A'/>
      )
    }
  }

  // Navigate to location page passing name of selected marker
  goToLocation (event) {
    const markerId = event._targetInst.return.key
    this.props.navigation.navigate('Location',{ name: markerId })
  }

  search (event) {
    this.props.navigation.navigate('Location',{ name: this.state.query })
    this.setState({ query: ""})
  }

  checkPoint (event) {
    this.setState({ alertTitle: event.name });
    this.showAlert();
  }

  confirmAlert () {
    this.hideAlert();
    this.props.navigation.navigate('Location',{ name: this.state.alertTitle })
  }

  showAlert = () => {
    this.setState({ showAlert: true });
  };
 
  hideAlert = () => {
    this.setState({ showAlert: false });
  };
  
  render() {
    const {showAlert} = this.state;

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20, backgroundColor: '#E76F51'}}>
          <LottieView source={require('../images/world_locations')} autoPlay/>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation= {true}
          followsUserLocation= {true}
          showsScale= {false}
          showsCompass= {false}
          showsBuildings= {false}
          showsTraffic= {false}
          showsIndoors= {false}
          rotateEnabled= {false}
          toolbarEnabled= {false}
          onPoiClick={e => this.checkPoint(e.nativeEvent)}
          initialRegion={{
            latitude: this.state.lat,
            longitude: this.state.long,
            latitudeDelta: 0.7500,
            longitudeDelta: 0.7500,}}>
          {/* Displays all available Locations */}
          {markersArray}
        </MapView>
        <View style={styles.inputArea}>
          <TextInput style={styles.inputBox}
            returnKeyType = { "done" } 
            onChangeText={(value) => this.setState({query: value})}
            value={this.state.query}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Enter Name of Location"
            placeholderTextColor='rgba(38, 70, 83, 0.5)'
            selectionColor='rgba(231, 111, 81, .15)' />
            <TouchableOpacity onPress={this.search}>
            <FontAwesome 
              style={styles.shadow}
              name="telegram" 
              size={50} 
              color='rgba(231, 111, 81, 1)' 
              margin='5' />
            </TouchableOpacity>
        </View>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title= {this.state.alertTitle}
          message="Would you like to see if there is a timeline available here?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No Thanks"
          confirmText="Heck Yeah!"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => { this.hideAlert(); }}
          onConfirmPressed={() => { this.confirmAlert(); }}
        />
      </View>
    )
  }
}

// Navigator for reaching all location related pages from Map screen
export default createStackNavigator({
  Map: {
    screen: Map
  },
  Location: {
    screen: LocationScreen
  },
  Timeline: {
    screen: TimelineScreen
  }, 
  Comment: {
    screen: CommentScreen
  }   
  },
  {
    initialRouteName: 'Map',
    navigationOptions: {
      headerTitle: LogoTitle,
      headerStyle: {
        backgroundColor: '#264653',
      },
      headerTintColor: '#ffffff',
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#3f3f3f',
  },

  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },

  inputArea: {
    flexDirection: 'row', 
    position: "absolute",
    bottom: 1,
  },

  shadow: {
    flex:1,
    textShadowOffset:{width:0, height:.1},
    shadowColor:'#000000',
    textShadowRadius: 5,
    shadowOpacity:0.3,
    marginRight: 7,
    marginVertical: 7,
  },

  inputBox: {
    flex:1,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 20,
    color: '#264653',
    marginHorizontal: 7,
    marginVertical: 7,
    elevation: 5,
    fontSize: 25
  }
});