import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Timeline from 'react-native-timeline-listview'
import { FontAwesome } from '@expo/vector-icons';

export default class TimelineView extends Component {

    // Aligns the header text with back button
    static navigationOptions = {
        headerRight: <View/>
    }

    constructor(){
        super()
        this.data = [
          {time: '2018', title: 'Old Orlando', description: 'Today, the historic core of "Old Orlando" resides in Downtown Orlando along Church Street, between Orange Avenue and Garland Avenue. The Urban development and the Central Business District of downtown have rapidly shaped the downtown skyline during recent history.'}, 
          {time: '2016', title: 'Pulse Shooting', description: 'On June 12, 2016, more than 100 people were shot at Pulse, a gay nightclub in Orlando. Fifty (including the gunman) were killed and 60 were wounded. The gunman, whom the police SWAT team shot to death, was identified as 29-year-old Omar Mir Seddique Mateen, an American security guard of Afghan descent. '},
          {time: '2014', title: 'Lake Eola Festival', description: 'Lake Eola in 1911 The geography of Orlando is mostly wetlands, consisting of many lakes and swamps.'},
          {time: '2010', title: 'Unincorporation', description: 'There are 115 neighborhoods within the city limits and many unincorporated communities. Orlandos city limits resemble a checkerboard, with pockets of unincorporated Orange County surrounded by city limits.'},
          {time: '2008', title: 'Old Orlando', description: 'Today, the historic core of "Old Orlando" resides in Downtown Orlando along Church Street, between Orange Avenue and Garland Avenue. The Urban development and the Central Business District of downtown have rapidly shaped the downtown skyline during recent history.'}, 
          {time: '2005', title: 'Pulse Shooting', description: 'On June 12, 2016, more than 100 people were shot at Pulse, a gay nightclub in Orlando. Fifty (including the gunman) were killed and 60 were wounded. The gunman, whom the police SWAT team shot to death, was identified as 29-year-old Omar Mir Seddique Mateen, an American security guard of Afghan descent. '},
          {time: '2002', title: 'Lake Eola Festival', description: 'Lake Eola in 1911 The geography of Orlando is mostly wetlands, consisting of many lakes and swamps.'},
          {time: '2000', title: 'Unincorporation', description: 'There are 115 neighborhoods within the city limits and many unincorporated communities. Orlandos city limits resemble a checkerboard, with pockets of unincorporated Orange County surrounded by city limits.'},

        ]
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, padding: 10}}>
                    <Timeline 
                        style={styles.timeLine}
                        data={this.data}
                        circleSize={20}
                        circleColor='#ff586e'
                        lineColor='#ff586e'
                        timeContainerStyle={{minWidth:65, flex: 2, justifyContent:'center', paddingTop: 16}}
                        timeStyle={{
                            textAlign: 'center', 
                            backgroundColor:'#c61b43', 
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