import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import colors from '../assets/Colors'
import { TextInput } from 'react-native-gesture-handler';

export default class Game501 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
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