import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class MainMenu extends React.Component {
    render(){
    return (
        <View style={styles.container}>
            <View style={styles.bottomenu}>
                <TouchableOpacity 
                activeOpacity={.7}
                style = {styles.tob}
                ><Text
                style={styles.menubutton}>Games</Text></TouchableOpacity>
                <TouchableOpacity 
                activeOpacity={.7}
                style = {styles.tob}
                ><Text
                style={styles.menubutton}>Highscores</Text></TouchableOpacity>
                                <TouchableOpacity 
                activeOpacity={.7}
                style = {styles.tob}
                ><Text
                style={styles.menubutton}>Profile</Text></TouchableOpacity>
                                <TouchableOpacity 
                activeOpacity={.7}
                style = {styles.tob}
                ><Text
                style={styles.menubutton}>Settings</Text></TouchableOpacity>
            </View>
        </View>
    );
}}

const styles = StyleSheet.create({
    container: {

    },
    bottomenu: {
        flexDirection: "row",
        textAlign: "center",
        marginTop: 50,
    },
    menubutton: {
        textAlign: 'center',
        backgroundColor: '#EEEEEE',
        paddingVertical: 20
    },
    tob: {
        width: '25%',
        marginTop: 630
    }
});
