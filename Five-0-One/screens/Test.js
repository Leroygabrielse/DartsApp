import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import colors from '../assets/Colors'
import { TextInput } from 'react-native-gesture-handler';

export default class Game501 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: 1
        }
    }
    testFunc=()=>{
        if (this.state.value == 1){
            this.nextFunc()
        }
        else {
            this.otherFunc()
        }
    }
    nextFunc=()=>{
        console.log("next")

    }
    otherFunc=()=>{
        console.log("other")
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                onPress={this.testFunc}>
                    <Text>Click for a function</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightgray,
        alignItems: 'center',
        justifyContent: 'center',
    }

});