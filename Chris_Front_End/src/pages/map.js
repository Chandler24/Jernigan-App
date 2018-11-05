import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import CommentScreen from './comment'
import LocationScreen from './location'
import TimelineScreen from './timeline'
import LogoTitle from './../components/logotitle'

class Map extends Component {

  static navigationOptions = {
    headerLeft: <View/>,
    headerRight: (
      // Adds refresh button to header bar
      <View style={{flex:1, flexDirection: 'row', padding: 15}}>
        <FontAwesome
          name="refresh"
          onPress={() => {}}
          color="#fff"
          size={30}
        />
      </View>
    ),
  }

  /* Envokes on page load */
  componentWillMount() {
    this.loadLocationsMarkers()
  }

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
    
    for (var i = 0; i < markers.locations.length; i++) {
      markersArray.push (
        <MapView.Marker
        key = {markers.locations[i].locationId}
        coordinate={{ latitude: markers.locations[i].latitude, longitude: markers.locations[i].longitude}}
        title={markers.locations[i].title}
        description={"Click here for timeline!"}
        onCalloutPress={(key) =>this.goToLocation(key)}
        pinColor= '#E9C46A'/>
      )
    }
  }

  // Calls backend to gather location data and navigate to page
  goToLocation (event) {
    this.props.navigation.navigate('Location')
  }
  
  render() {   
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 28.6014,
            longitude: -81.1987,
            latitudeDelta: 0.0020,
            longitudeDelta: 0.0020,}}>
          {/* User's Location */}
          <MapView.Marker
            coordinate={{
              latitude: 28.6014,
              longitude: -81.1987,
            }}>
            <View style={styles.radius}>
              <View style={styles.marker} />
            </View>
          </MapView.Marker>
          {/* Displays all available Locations */}
          {markersArray}
        </MapView>
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

  radius: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: 'rgba(231, 111, 81, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(231, 111, 81, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#E76F51'
  },
});