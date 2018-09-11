import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default class Login extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Favorites</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#2e88ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});