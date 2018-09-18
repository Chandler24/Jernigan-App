import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class FavElement extends Component {
    render() {
        return(
            <View style={styles.favoriteElement}>
                <Image source={this.props.imageUri} style={styles.image}/>
                <Text style={styles.title}>{this.props.name}</Text>
            </View>  
        )
    }
}

const styles = StyleSheet.create({
    favoriteElement:{
        borderRadius: 25,
        height: 130,
        borderWidth: 2,
        backgroundColor: '#76b7ff',
        borderColor: '#005ccb',
        marginBottom: 10
    },

    image:{
        borderRadius: 20,
        flex:1, 
        width:null, 
        height:null, 
        resizeMode: 'cover'
    },

    title:{
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    }
});