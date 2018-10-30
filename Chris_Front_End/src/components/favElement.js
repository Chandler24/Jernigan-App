import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class FavElement extends Component {

    render() {
        return (
            <View style={styles.favoriteElement}>
                <Image source={this.props.imageUri} style={styles.image} />
                <Text style={styles.title} >{this.props.name} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    favoriteElement: {
        height: 130,
        marginBottom: 10,
    },

    image: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#c61b43',
        flex: 1,
        marginHorizontal: 10,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    title: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    }
});