import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import Timeline from 'react-native-timeline-listview'

export default class TimelineView extends Component {

  constructor() {
    super();
    this.state = {
      timelinePoints: {},
    };
    this.loadTimelineEntrys = this.loadTimelineEntrys.bind(this);
  }

  // Aligns the header text with back button
  static navigationOptions = {
    headerRight: <View/>
  }

  /* Envokes on page load */
  componentWillMount() {
    this.loadTimelineEntrys()
  }

  /* Loads all comments of current location */
  async loadTimelineEntrys () {
/*
    data = []

    const command = global.url + "/api/Location/GenerateTimeline?locationName=" + "University OF Central FLorida";
    const response = await fetch(command, {method: 'POST'});

    if (!response.ok) {
      alert("Server Down");
      throw Error(response.statusText);
    }

    this.state.timelinePoints = await JSON.parse(response.text());

    console.log(this.state.timelinePoints);

    for (var i = 0; i < this.state.timelinePoints.Info.length; i++) {
      data.push({time: this.state.timelinePoints.Info[i].Year, description: this.state.timelinePoints.Info[i].Description})
    }
    data.push({description: " "})
*/
    this.state.timelinePoints = require('../testdata/location/timelineresponse.json');
    data = []

    for (var i = 0; i < this.state.timelinePoints.Info.length; i++) {
      data.push({time: this.state.timelinePoints.Info[i].Year, description: this.state.timelinePoints.Info[i].Description})
    }
    data.push({description: " "})
  }
    
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, padding: 10}}>
          <Timeline 
            style={styles.timeline}
            data={data}
            circleSize={20}
            circleColor='#E9C46A'
            lineColor='#E9C46A'
            timeContainerStyle={{minWidth:65, flex: 2, justifyContent:'center', paddingTop: 16}}
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
              style:{paddingTop:5}
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E76F51'
  },

  headerText: {
    color: '#ffffff',
    fontSize: 40,
    marginTop: 5,
    fontWeight: '500',
    textAlign: 'center',
  },

  buttonLayout: {
    flex: .1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 2
  },

  button: {
    width: '45%',
    height: 43,
    backgroundColor: '#005ccb',
    borderRadius: 25,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 4
  },

  timeline: {
    top: 35
  }
});