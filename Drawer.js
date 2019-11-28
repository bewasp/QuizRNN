import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Home extends Component<props>{

    goToScreen = (screenName) => {
        Navigation.push('AppStack',{
            component: {
                name: screenName
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.drawerItemStyle}>
                    <TouchableOpacity style={styles.btn} onPress={() => this.goToScreen('ResultScreen')}>
                        <Text style={styles.buttonText}>Results</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => this.goToScreen('Home')}>
                        <Text style={styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'gray'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    drawerItemStyle: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 30,
        color: 'white'
    }
});
