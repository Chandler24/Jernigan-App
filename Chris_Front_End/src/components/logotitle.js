import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

/* This class allows all pages to display the Jernigan logo on the top header */
export default class LogoTitle extends Component {
  render() {
    return (
      <View style={{height: 60, backgroundColor: '#264653', elevation: 5}}>
        <Image
          source={require('../images/smalllogo.png')}
          style={styles.headerImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerImage: {
    height: 60,
    paddingLeft:2,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});