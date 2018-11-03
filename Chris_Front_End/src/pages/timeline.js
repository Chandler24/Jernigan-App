import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Timeline from 'react-native-timeline-listview'
import { FontAwesome } from '@expo/vector-icons';

export default class TimelineView extends Component {

    // Aligns the header text with back button
    static navigationOptions = {
        headerRight: <View/>
    }
    
    render() {

        timelinePoints = require('../testdata/location/timelineRequest.json');
        data = []

        for (var i = 0; i < timelinePoints.timelinePoints.length; i++)
        {
            data.push({time: timelinePoints.timelinePoints[i].date, description: timelinePoints.timelinePoints[i].desc})
        }

        return (
            <View style={styles.container}>
                <View style={{flex: 1, padding: 10}}>
                    <Timeline 
                        style={styles.timeLine}
                        data={data}
                        circleSize={20}
                        circleColor='rgb(21,50,133)'
                        lineColor='rgb(21,50,133)'
                        timeContainerStyle={{minWidth:65, flex: 2, justifyContent:'center', paddingTop: 16}}
                        timeStyle={{
                            textAlign: 'center', 
                            backgroundColor:'rgb(248, 147, 48)', 
                            color:'white', padding:5, 
                            borderRadius:13, 
                            fontSize: 20, 
                            fontWeight: 'bold'}}
                        titleStyle={{
                            color:'white', 
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
        backgroundColor: '#3f3f3f'
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

});