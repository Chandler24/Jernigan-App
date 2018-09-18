import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import FavElement from './../components/favElement'

export default class Favorites extends Component {
    render() {
        return(
                <View style={styles.container}>
                    <View>
                        <Text style={styles.headerText} > Favorites</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                        <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            />
                            <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            />
                            <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            /> 
                            <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            />
                            <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            />
                            <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            />
                            <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            />
                            <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            />
                            <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            /> 
                            <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            />
                            <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            />
                            <FavElement
                                imageUri={require('../images/cityhall.jpg')}
                                name="Orlando City Hall" 
                            />
                                                       
                        </ScrollView>
                    </View> 
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#2e88ff'
    },

    headerText: {
        color: '#ffffff',
        fontSize: 40,
        marginTop: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
});