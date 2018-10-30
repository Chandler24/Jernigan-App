import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import './global'

import TimelineScreen from './timeline'
import FavElement from './../components/favElement'
import LogoTitle from './../components/logotitle'

class Favorites extends Component {

    generateTimeline = () => {
        this.props.navigation.navigate('./../pages/timeline')
    }

    state = {favorites : []};
    componentWillMount(){
        var userId = JSON.stringify({guid: 'bbbd861b-62ae-4eb5-9677-3aa2e354c583'});
        var command = global.url + "/api/Location/GetFavoriteLocations?userId=" + userId;

        fetch(command, { 
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
        },

        // Parces json data from server response
        }).then((response) => response.json())
        // plays with the parsed json data and performs some function.
        .then((responseJson) => {
            for (i = 0; i < responseJson.LocationInfo; i++)
            this.setState({favorites : responseJson.LocationInfo[i]});
        })
        //catches any error.
        .catch((error) => {
            console.error(error);
        });
    
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{margin : 6}}/>
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                            onPress={this.generateTimeline}
                        />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default createStackNavigator({
    Favorites: {
        screen: Favorites
    },
    Timeline: {
      screen: TimelineScreen
    },   
    },
    {
        initialRouteName: 'Favorites',
        navigationOptions: {
            headerTitle: LogoTitle,
            headerStyle: {
                backgroundColor: '#191919',
            },
            headerTintColor: '#ffffff',
          }
    }
 );

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#3f3f3f'
    },

    headerText: {
        color: '#ffffff',
        fontSize: 40,
        paddingBottom: 5,
        fontWeight: '500',
        textAlign: 'center',
    },
});