import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import Timeline from 'react-native-timeline-listview';

export default class TimelineView extends Component {

  // Aligns the header text with back button
  static navigationOptions = {
    headerRight: <View/>
  }

  /* Envokes on page load */
  componentWillMount() {
    this.loadTimelineEntrys()
  }

  /* Loads all comments of current location */
  loadTimelineEntrys () {
    data = []
    const {navigation} = this.props
    const timelineData = navigation.getParam('data', 'failed')

    for (var i = 0; i < timelineData.length; i++) {
      data.push({time: timelineData[i].Year, description: timelineData[i].Description})
    }
  }
    
  render() {
    return (
      <View style={styles.container}>
          <Timeline 
            data={data}
            circleSize={20}
            circleColor='#E9C46A'
            lineColor='#E9C46A'
            timeContainerStyle={{flex: 2, justifyContent:'center', paddingTop: 16}}
            timeStyle={{
              textAlign: 'center', 
              backgroundColor:'#2A9D8F', 
              color:'#ffffff', 
              padding:5, 
              borderRadius:13, 
              fontSize: 20, 
              fontWeight: 'bold'}}
            descriptionStyle={{color:'white'}}
            innerCircle={'dot'}
            columnFormat='single-column-left'
            options={{
              style:{paddingTop:5, paddingHorizontal: 5}
            }}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E76F51'
  },
});