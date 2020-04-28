import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import colors from '../assets/Colors'
import { TextInput } from 'react-native-gesture-handler';

export default class Game501 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1,
            styleVal: styles.div1Active,
            styleVal2: styles.div1Inactive
        }
    }
    
    testFunc = () => {
        switch (this.state.value) {
            case 1:
                this.nextFunc()
                this.setState({ value: this.state.value + 1 })
                break;

            case 2:
                this.otherFunc()
                this.setState({ value: this.state.value - 1 })
                break;
        }
    }
    nextFunc = () => {
        console.log("next")

    }
    otherFunc = () => {
        console.log("other")
    }


    statePrint = () => {
        const keys = Object.keys(this.state)
        console.log(keys[0])
    }

    changeKey = () => {
        const keys = Object.keys(this.state)
        keys[1] = "styleVal2"
        keys[2] = "styleVal"
        console.log(keys[2])
        console.log(this.state.styleVal)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style = {this.state.styleVal}><Text>Div1</Text></View>
                <View style = {this.state.styleVal2}><Text>Div2</Text></View>
                <TouchableOpacity
                    onPress={this.testFunc}>
                    <Text>Click for a function</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.statePrint}>
                    <Text>Click for function 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.changeKey}>
                    <Text>Change key</Text>
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
    },
    div1Active: {
        backgroundColor: colors.orange
    },
    div1Inactive: {
        backgroundColor: colors.gray
    }

});

/*

        if (this.state.value == 1){
            this.nextFunc()
            this.setState({value:2})
        }
        else {
            this.otherFunc()
            this.setState({value:1})
        }

*/