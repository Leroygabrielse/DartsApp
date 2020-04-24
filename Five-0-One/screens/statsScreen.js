import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import colors from '../assets/Colors'

export default class Game501 extends React.Component {

    quitGame = () => {
        Alert.alert("Warning","Do you really want to quit the game?",[{text: "No"},{text: "Yes" ,onPress: ()=>this.props.navigation.navigate("pre Game") }])
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Stats</Text>
                <TouchableOpacity onPress={this.quitGame}>
                    <Text>Quit Game</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    }

});