import React, { Component } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Dimensions, Platform, TouchableWithoutFeedback } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import colors from '../config/Colors'
import { color } from 'react-native-reanimated'

const { height, width } = Dimensions.get('window')

export default class Test extends Component {
    render() {
        const behavior = Platform.OS === "ios" ? "padding" : "";
        return (
            <TouchableWithoutFeedback style={styles.TouchableWithoutFeedback}>
                <KeyboardAvoidingView
                    behavior={behavior}
                    enabled
                    style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={colors.white}
                        placeholder="Enter something" />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colors.lightgray
    },
    input: {
        backgroundColor: colors.lightgreen,
        width: width,
        padding: 8,
        fontSize: 24
    },
    TouchableWithoutFeedback: {
        flex: 1
    }
})
