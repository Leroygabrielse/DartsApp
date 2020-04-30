import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name_player1: '',
            name_player2: '',
            amountOfLegs: 3,
            game_variant: 'FIRST TO ',
            game_variant2: ' LEGS'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={(name_player1) => { this.setState({ name_player1 }) }}
                    placeholder="name player 1" />
                <TextInput
                    onChangeText={(name_player2) => { this.setState({ name_player2 }) }}
                    placeholder="name player 2" />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Test2',
                    [this.state.name_player1,
                    this.state.name_player2,
                    this.state.game_variant,
                    this.state.amountOfLegs,
                    this.state.game_variant2])}>
                    <Text>Start Game</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log(this.state.game_variant)}>
                    <Text>
                        Test
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
