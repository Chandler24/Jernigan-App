import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import FavElement from '../components/favElement'

export default class Visited extends Component {

    // Aligns the header text with back button
    static navigationOptions = {
        headerRight: <View/>
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                        <View style={{margin : 6}}/>
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                        <FavElement
                            imageUri={require('../images/cityhall.jpg')}
                            name="Orlando City Hall"
                        />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#2e88ff'
    },

    headerText: {
        color: '#ffffff',
        fontSize: 40,
        marginTop: 5,
        fontWeight: '500',
        textAlign: 'center',
    },
});