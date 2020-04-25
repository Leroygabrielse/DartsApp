import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import colors from '../assets/Colors'
import { TextInput } from 'react-native-gesture-handler';

export default class Game501 extends React.Component {
    constructor(props) {
        super(props)
        this.player2Ref = React.createRef();
        this.numbersRef = React.createRef();
        this.state = {
            player1: '',
            player2: '',
            numberOfLegs: 0,
            bestOfFirstTo: 'FIRST TO',
            legsOrSets: 'SETS',
            buttonStyleFirst: styles.firstToButtonsActive,
            buttonStyleBest: styles.bestOfButtonsInactive,
            textStyleFirst: styles.firstToTextActive,
            textStyleBest: styles.firstToTextInactive,
            buttonStyleSets: styles.bestOfButtonsActive,
            buttonStyleLegs: styles.firstToButtonsInactive,

            textStyleLegs: styles.firstToTextInactive,
            textStyleSets: styles.firstToTextActive,

            placeholderText: "Number of Legs"
        }
    }
    startGame = () => {
        if (this.state.player1 == '' | this.state.player1 == '' | this.state.numberOfLegs == 0) {
            Alert.alert("Warning", "Please fill in all the fields")
        }
        else if (this.state.numberOfLegs > 30){
            Alert.alert("Whaaaaat1?","Do you really want to play this many legs or sets?",[{text: "No"},{text: "Yeeees", onPress: ()=>this.props.navigation.navigate("501", { player1: this.state.player1, player2: this.state.player2, numberOfLegs: this.state.numberOfLegs, bestOfFirstTo: this.state.bestOfFirstTo, legsOrSets: this.state.legsOrSets })}])
        }
        else {
            this.props.navigation.navigate("501", { player1: this.state.player1, player2: this.state.player2, numberOfLegs: this.state.numberOfLegs, bestOfFirstTo: this.state.bestOfFirstTo, legsOrSets: this.state.legsOrSets })
        }
    }
    makeActive = (button) => {
        switch (button) {
            case "bestof":
                this.setState({ buttonStyleBest: styles.bestOfButtonsActive })
                this.setState({ textStyleBest: styles.firstToTextActive })
                this.setState({ buttonStyleFirst: styles.firstToButtonsInactive })
                this.setState({ textStyleFirst: styles.firstToTextInactive })
                this.setState({ bestOfFirstTo: "BEST OF" })
                break;
            case "firstto":
                this.setState({ buttonStyleBest: styles.bestOfButtonsInactive })
                this.setState({ textStyleBest: styles.firstToTextInactive })
                this.setState({ buttonStyleFirst: styles.firstToButtonsActive })
                this.setState({ textStyleFirst: styles.firstToTextActive })
                this.setState({ bestOfFirstTo: "FIRST TO" })
                break;
            case "sets":
                this.setState({ buttonStyleSets: styles.bestOfButtonsActive })
                this.setState({ buttonStyleLegs: styles.firstToButtonsInactive })
                this.setState({ textStyleSets: styles.firstToTextActive })
                this.setState({ textStyleLegs: styles.firstToTextInactive })
                this.setState({ legsOrSets: "SETS" })
                break;
            case "legs":
                this.setState({ buttonStyleSets: styles.bestOfButtonsInactive })
                this.setState({ buttonStyleLegs: styles.firstToButtonsActive })
                this.setState({ textStyleSets: styles.firstToTextInactive })
                this.setState({ textStyleLegs: styles.firstToTextActive })
                this.setState({ legsOrSets: "LEGS" })
                break;
        }
    }
    changeScore = () => {
        console.log("Change Score method has to be made yet")
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.gameScoreStart}>
                    <Text style={{ flex: 1 }}></Text>
                    <Text style={styles.gameText}>501</Text>
                    <View style={styles.changeButtonContainer}>
                        <TouchableOpacity
                            onPress={this.changeScore}
                            style={styles.changeButton}>
                            <Image
                                style={styles.containImage}
                                source={require("./../assets/changeIcon.png")} />
                        </TouchableOpacity>
                    </View>

                </View>

                <TextInput
                    returnKeyType='next'
                    style={styles.inputs}
                    onChangeText={(player1) => this.setState({ player1 })}
                    placeholder="Name Player 1" />
                <TextInput
                    returnKeyType='next'
                    style={styles.inputs}
                    onChangeText={(player2) => this.setState({ player2 })}
                    placeholder="Name Player 2" />
                <View style={styles.bestOf}>
                    <TouchableOpacity
                        onPress={() => this.makeActive('bestof')}
                        style={this.state.buttonStyleBest}><Text style={this.state.textStyleBest}>BEST OF</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.makeActive('firstto')}
                        style={this.state.buttonStyleFirst}><Text style={this.state.textStyleFirst}>FIRST TO</Text></TouchableOpacity>
                </View>
                <View style={styles.bestOf}>
                    <TouchableOpacity
                        onPress={() => this.makeActive('sets')}
                        style={this.state.buttonStyleSets}><Text style={this.state.textStyleSets}>SETS</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.makeActive('legs')}
                        style={this.state.buttonStyleLegs}><Text style={this.state.textStyleLegs}>LEGS</Text></TouchableOpacity>
                </View>
                <TextInput
                    style={styles.inputs}
                    returnKeyType='go'
                    keyboardType='numbers-and-punctuation'
                    onChangeText={(numberOfLegs) => this.setState({ numberOfLegs })}
                    placeholder={this.state.placeholderText} />
                <TouchableOpacity
                    style={styles.startbutton}
                    onPress={this.startGame}>
                    <Text style={{ color: colors.white, fontSize: 30 }}>Start</Text>
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
    startbutton: {
        backgroundColor: colors.green,
        width: "90%",
        alignItems: 'center',
        padding: 14,
        borderRadius: 15
    },
    inputs: {
        backgroundColor: colors.white,
        width: "90%",
        borderRadius: 15,
        padding: 22,
        marginBottom: "2%"
    },
    gameText: {
        fontSize: 130,
        textAlign: 'center'
    },
    bestOf: {
        flexDirection: 'row',
        width: "90%",
        marginBottom: 6
    },
    bestOfButtonsInactive: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.lightgreen,
        padding: 22,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    bestOfButtonsActive: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.green,
        padding: 22,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    firstToButtonsInactive: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.lightgreen,
        padding: 22,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderLeftWidth: 4
    },
    firstToButtonsActive: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.green,
        padding: 22,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderLeftWidth: 4
    },
    firstToTextActive: {
        color: colors.white
    },
    containImage: {
        resizeMode: 'contain',
        width: '70%',
        height: '70%',
    },
    gameScoreStart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
    },
    changeButtonContainer: {
        flex: 1,
    },
    changeButton: {
        flex: 0.5,
        borderRadius: 15,
        borderWidth: 4,
        backgroundColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center'
    }

});