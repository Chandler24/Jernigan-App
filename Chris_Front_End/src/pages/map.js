import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Location, Permissions } from 'expo';
import LottieView from 'lottie-react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

/* Loads in pages to navigate to */
import CommentScreen from './comment'
import LocationScreen from './location'
import TimelineScreen from './timeline'
import LogoTitle from './../components/logotitle'
import './global'

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
      alertTitle: "",
      alertCoordinates: {}
    };
    this.getLocationAsync = this.getLocationAsync.bind(this);
    this.search = this.search.bind(this);    
  };

  /* Envokes on page load */
  componentWillMount() {
    this.getLocationAsync();
    this.loadLocationsMarkers()
  }

  /* Grabs User Location */
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

    if (global.offline == false ) {
      var markers = require('../testdata/location/nearbyLocationsRequest.json');
    } else {
      var markers = require('../testdata/location/offlineLocation.json');
    }
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

  // Navigate to location page of search query
  search (event) {
    if (global.offline == false) {
      this.props.navigation.navigate('Location',{ name: this.state.query })
      this.setState({ query: ""})
    }
  }

  // Shows alert for a Place of Intrest selected
  showAlert (event) {
    console.log(event)
    var temp = event.name
    temp = temp.replace(/(\r\n\t|\n|\r\t)/gm," ");
    this.setState({ alertTitle: temp });
    this.setState({ alertCoordinates: event.coordinate});
    this.setState({ showAlert: true });
  }

  confirmAlert () {
    this.hideAlert();
    if (global.offline == false) {
      this.props.navigation.navigate('Location',{ name: this.state.alertTitle, coordinates: this.state.alertCoordinates })
    }
  }
 
  hideAlert = () => {
    this.setState({ showAlert: false });
  };
  
  render() {
    const {showAlert} = this.state;

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, backgroundColor: '#E76F51'}}>
          <LogoTitle/>
          <LottieView style={{paddingTop:20}} source={require('../images/world_locations')} autoPlay/>
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
          onPoiClick={e => this.showAlert(e.nativeEvent)}
          initialRegion={{
            latitude: this.state.lat,
            longitude: this.state.long,
            latitudeDelta: 0.7500,
            longitudeDelta: 0.7500,}}>
          {/* Displays all available Locations */}
          {markersArray}
        </MapView>
        <LogoTitle/>
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
          titleStyle= {{textAlign: 'center'}}
          message="Would you like to see if there is a timeline available here?"
          messageStyle= {{textAlign: 'center'}}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No Thanks"
          confirmText="Heck Yeah!"
          confirmButtonColor="#E76F51"
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
    headerMode: "float",
    navigationOptions: {
      header: null
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