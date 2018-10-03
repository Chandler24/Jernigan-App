import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import TimelineScreen from './timeline'
import LogoTitle from './../components/logotitle'

class Map extends Component {

    static navigationOptions = {
        headerLeft: <View/>,
        headerRight: (
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

    generateTimeline = () => {
        this.props.navigation.navigate('Timeline')
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
                        longitudeDelta: 0.0020,
                    }}>
                    <MapView.Marker
                        coordinate={{
                            latitude: 28.6014,
                            longitude: -81.1987,
                        }}>
                        <View style={styles.radius}>
                            <View style={styles.marker} />
                        </View>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 28.6014,
                            longitude: -81.1995}}
                        title={"Kennedy Space Center"}
                        description={"Click here for timeline!"}
                        onCalloutPress={this.generateTimeline}
                        pinColor= '#007AFF'>
                    </MapView.Marker>    
                    <MapView.Marker
                        coordinate={{
                            latitude: 28.6007,
                            longitude: -81.1980}}
                        title={"UCF Student Union"}
                        description={"Click here for timeline!"}
                        onCalloutPress={this.generateTimeline}
                        pinColor= '#007AFF'>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 28.6020,
                            longitude: -81.1982}}
                        title={"Dave & Busters"}
                        description={"Click here for timeline!"}
                        onCalloutPress={this.generateTimeline}
                        pinColor= '#007AFF'>
                    </MapView.Marker>
                </MapView>
            </View>
        )
    }
}

export default createStackNavigator({
    Map: {
        screen: Map
    },
    Timeline: {
      screen: TimelineScreen
    },   
    },
    {
        initialRouteName: 'Map',
        navigationOptions: {
            headerTitle: LogoTitle,
            headerStyle: {
                backgroundColor: '#005ccb',
            },
            headerTintColor: '#ffffff',
          }
    }
  );

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#2e88ff',
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0, 122, 255, 0.3)',
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
        backgroundColor: '#007AFF'
    },
});