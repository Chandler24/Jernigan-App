import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TimelineScreen from './timeline'
import FavElement from './../components/favElement'
import LogoTitle from './../components/logotitle'

class Favorites extends Component {

    generateTimeline = () => {
        this.props.navigation.navigate('./../pages/timeline')
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
                backgroundColor: '#005ccb',
            },
            headerTintColor: '#ffffff',
          }
    }
 );

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#2e88ff'
    },

    headerText: {
        color: '#ffffff',
        fontSize: 40,
        paddingBottom: 5,
        fontWeight: '500',
        textAlign: 'center',
    },
});