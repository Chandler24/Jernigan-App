import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default class LogoTitle extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
          <Image
              source={require('../images/logo.png')}
              style={styles.headerImage}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  headerImage: {
      height: 50,
      marginBottom: 5,
      resizeMode: 'contain',
      alignSelf: 'center',

  }
});