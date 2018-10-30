import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import CommentElement from './../components/commentElement'

export default class Comment extends Component {

  constructor() {
    super();
    this.state = {
      workingComment: '',
      comments: []
    };
    this.addComment = this.addComment.bind(this);
  }

  changeTextHandler = workingComment => {
    this.setState({ workingComment: workingComment });
  };

  addComment = () => {
    let notEmpty = this.state.workingComment.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { comments } = prevState;
          return {
            comments: comments.concat(<CommentElement key={0} comment= {this.state.workingComment}/>),
            workingComment: ""
          };
        }
      );
    }
  }

  // Aligns the header text with back button
  static navigationOptions = {
    headerRight: <View/>
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.comments}
          <View style={{marginBottom: 90}}></View>
        </ScrollView>
        <View style={styles.inputArea}>
            <TextInput style={styles.inputBox}
              onChangeText={this.changeTextHandler}
              value={this.state.workingComment}
              multiline={true}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Leave a comment!"
              placeholderTextColor='rgba(255,255,255,0.75)'
              selectionColor='rgba(255,255,255,0.75)' />
            <FontAwesome onPress={this.addComment} 
              name="telegram" 
              size={50} 
              color='#c61b43' 
              margin='5'
              borderWidth= '2'
              borderColor= '#191919' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#3f3f3f',
    },

    inputArea: {
      flexDirection: 'row', 
      position: "absolute",
      bottom: 20,
      margin: 6
    },

    inputBox: {
      flex:1,
      height: 50,
      backgroundColor: '#191919',
      borderRadius: 5,
      paddingHorizontal: 20,
      color: '#ffffff',
      marginRight: 7,
      borderColor:'#c61b43',
      borderWidth: 2

  },
});