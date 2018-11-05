import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import CommentElement from './../components/commentElement'

export default class Comment extends Component {

  constructor() {
    super();
    this.state = {
      previousComments: {},
      workingComment: '',
      comments: []
    };
    this.addComment = this.addComment.bind(this);
  }

  /* Handles user entry as they are typing */
  changeTextHandler = workingComment => {
    this.setState({ workingComment: workingComment });
  };

  /* Envokes on page load */
  componentWillMount() {
    this.loadComments()
  }

  /* Loads all comments of current location */
  async loadComments () {
/*
    const command = global.url + "api/Location/getComments?locationId=" + passedIn.locationId;
    const response = await fetch(command, {method: 'POST'});
    
    if (!response.ok) {
      alert("Server Down");
      throw Error(response.statusText);
    }
    
    this.state.previousComments = await response.json();
*/
    this.state.previousComments = require('../testdata/location/commentsRequest.json');

    for (var i = 0; i < this.state.previousComments.comments.length; i++)
    {
      this.state.comments.push(<CommentElement key={i} username={this.state.previousComments.comments[i].user} comment= {this.state.previousComments.comments[i].body}/>)
    }
  }

  /* Function invoked when a comment is added */
  async addComment () {
    /* Sets 'notEmpty" to T/F is the entered comment contains data or not */
    let notEmpty = this.state.workingComment.trim().length > 0;

    if (notEmpty) {
/*
      const command = global.url + "api/Location/getComments?locationId=" + passedIn.locationId + "&userId" + global.userId + "&comment" + this.state.workingComment;
      const response = await fetch(command, {method: 'POST'});
      
      if (!response.ok) {
        alert("Server Down");
        throw Error(response.statusText);
      }
*/
      this.setState( prevState => {
        let { comments } = prevState;
        return {
          comments: comments.concat(<CommentElement key={0} username={"User"} comment= {this.state.workingComment}/>),
          workingComment: ""
        };
      });  
    } else {
      alert("Comment is empty!")
    }
  }

  // Organizaes header components
  static navigationOptions = {
    headerRight: <View/>
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Loads all of the current comments */}
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 10}}></View>
          {this.state.comments}
          <View style={{marginBottom: 90}}></View>
        </ScrollView>
        {/* Comment input area which contains a text field and a submit button */}
        <View style={styles.inputArea}>
          <TextInput style={styles.inputBox}
            onChangeText={this.changeTextHandler}
            value={this.state.workingComment}
            multiline={true}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Leave a comment!"
            placeholderTextColor='rgba(38, 70, 83, 0.5)'
            selectionColor='rgba(255,255,255,0.75)' />
          <FontAwesome onPress={this.addComment} 
            name="telegram" 
            size={50} 
            color='#2A9D8F' 
            margin='5' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E9C46A',
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
    backgroundColor: '#ffffff',
    borderColor: "#2A9D8F",
    borderRadius: 10,
    paddingHorizontal: 20,
    color: '#264653',
    marginRight: 7,
    borderWidth: 2,
    elevation: 5,
  },
});