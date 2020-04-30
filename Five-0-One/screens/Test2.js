import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, Alert } from 'react-native';
import colors from '../assets/Colors'

const STATUSBARHEIGHT = Platform.OS === 'ios' ? 20 : 0

function Player(name) {
    return {
        name,
        score: 501,
        legs: 0,
        sets: 0
    }
}

export default class Game501 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            PLAYER_1: Player(this.props.route.params[0]),
            PLAYER_2: Player(this.props.route.params[1]),
            playerTurn: 0,
            scoreInput: 0,
            player1Style: { ...styles.scoresPlayersActive },
            player2Style: { ...styles.scoresPlayersActive, ...styles.inactive },
            player1TextStyle: { ...styles.matchScoreTextActive },
            player2TextStyle: { ...styles.matchScoreTextActive, ...styles.inactiveText },
            gameVariant: this.props.route.params[2] + this.props.route.params[3] + this.props.route.params[4],
            winAmount: this.props.route.params[3]
        }
    }
    legEnd = () => {
        if (this.props.route.params[4] == ' LEGS'){
            this.state[Object.keys(this.state)[this.state.playerTurn]]["legs"] += 1
            if (this.props.route.params[2] == 'FIRST TO '){
                if (this.state[Object.keys(this.state)[this.state.playerTurn]]["legs"] == this.state.winAmount) {
                    this.props.navigation.navigate("matchDone")
                }
            }
            else{
                if (this.state[Object.keys(this.state)[this.state.playerTurn]]["legs"] > this.state.winAmount / 2) {
                    this.props.navigation.navigate("matchDone")
                }  
            }
        }else{
            this.state[Object.keys(this.state)[this.state.playerTurn]]["legs"] += 1
            if(this.state[Object.keys(this.state)[this.state.playerTurn]]["legs"] == 3){
                this.state[Object.keys(this.state)[this.state.playerTurn]]["sets"] += 1
                if (this.props.route.params[2] == 'FIRST TO '){
                    if (this.state[Object.keys(this.state)[this.state.playerTurn]]["sets"] == this.state.winAmount) {
                        this.props.navigation.navigate("matchDone")
                    }
                }
                else{
                    if (this.state[Object.keys(this.state)[this.state.playerTurn]]["sets"] > this.state.winAmount / 2) {
                        this.props.navigation.navigate("matchDone")
                    }  
                }
                this.resetSet()
            }
        }
    }
    resetSet = () => {
        this.state[Object.keys(this.state)[0]]["score"] = 501
        this.state[Object.keys(this.state)[1]]["score"] = 501
        this.state[Object.keys(this.state)[0]]["legs"] = 0
        this.state[Object.keys(this.state)[1]]["legs"] = 0
    }
    resetLeg = () => {
        this.state[Object.keys(this.state)[0]]["score"] = 501
        this.state[Object.keys(this.state)[1]]["score"] = 501
    }
    addNumber = (number) => {
        if (this.state.scoreInput == 0) {
            this.setState({ scoreInput: number })
        }
        else {
            var newScore = this.state.scoreInput
            newScore += number
            if (newScore < 181) {
                this.setState({ scoreInput: this.state.scoreInput + number })
            }

        }
    }
    removeNumber = () => {
        var str = "" + this.state.scoreInput
        var res = str.substring(0, str.length - 1)
        if (res.length > 0) {
            this.setState({ scoreInput: res })
        }
        else {
            this.setState({ scoreInput: 0 })
        }

    }

    changePlayer = () => {
        if (this.state.playerTurn == 0) {
            this.setState({ playerTurn: this.state.playerTurn + 1 })
            this.setState({ player1Style: this.state.player2Style })
            this.setState({ player2Style: this.state.player1Style })
            this.setState({ player1TextStyle: this.state.player2TextStyle })
            this.setState({ player2TextStyle: this.state.player1TextStyle })
        } else {
            this.setState({ playerTurn: this.state.playerTurn - 1 })
            this.setState({ player1Style: this.state.player2Style })
            this.setState({ player2Style: this.state.player1Style })
            this.setState({ player1TextStyle: this.state.player2TextStyle })
            this.setState({ player2TextStyle: this.state.player1TextStyle })
        }
    }

    enterScore = () => {
        if (this.state[Object.keys(this.state)[this.state.playerTurn]]["score"] - this.state.scoreInput == 0) {
            this.legEnd()
            this.resetLeg()
            this.setState({ scoreInput: 0 })
        } else if (this.state[Object.keys(this.state)[this.state.playerTurn]]["score"] - this.state.scoreInput < 0) {
            Alert.alert("Error", "Not a possible score, if thrown score is higher than your score enter 0")
            this.setState({ scoreInput: 0 })
        } else {
            this.state[Object.keys(this.state)[this.state.playerTurn]]["score"] -= this.state.scoreInput
            this.changePlayer()
            this.setState({ scoreInput: 0 })
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#5DA271' />

                <View style={styles.topHalf}>
                    <View style={styles.withMargin}>
                        <View style={styles.gameVariant}>
                            <Text style={styles.gameVariantText}>{this.state.gameVariant}</Text></View>
                        <View style={this.state.player1Style}>
                            <View style={styles.score}>
                                <Text>{this.state.PLAYER_1["name"]}</Text>
                                <View style={{ flex: 1, justifyContent: 'center' }}><Text style={this.state.player1TextStyle}>{this.state.PLAYER_1["score"]}</Text></View>
                                <Text></Text>
                            </View>
                            <View style={styles.sets}>
                                <Text>SETS</Text>
                                <View style={{ flex: 1, justifyContent: 'center' }}><Text style={this.state.player1TextStyle}>{this.state.PLAYER_1["sets"]}</Text></View>
                                <Text></Text>

                            </View>
                            <View style={styles.legs}>
                                <Text>LEGS</Text>
                                <View style={{ flex: 1, justifyContent: 'center' }}><Text style={this.state.player1TextStyle}>{this.state.PLAYER_1["legs"]}</Text></View>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={this.state.player2Style}>
                            <View style={styles.score}>
                                <Text>{this.state.PLAYER_2["name"]}</Text>
                                <View style={{ flex: 1, justifyContent: 'center' }}><Text style={this.state.player2TextStyle}>{this.state.PLAYER_2["score"]}</Text></View>
                                <Text></Text>
                            </View>
                            <View style={styles.sets2}><Text style={this.state.player2TextStyle}>{this.state.PLAYER_2['sets']}</Text></View>
                            <View style={styles.legs2}><Text style={this.state.player2TextStyle}>{this.state.PLAYER_2['legs']}</Text></View>
                        </View>
                    </View>
                </View>

                <View style={styles.bottomHalf}>
                    <View style={styles.scoreInputBar}>
                        <TouchableOpacity
                            onPress={this.undoScore}
                            activeOpacity={.7}
                            style={styles.undoButton}>
                            <Image
                                style={styles.resizeContain}
                                source={require("./../assets/undoScore.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.scoreInputText}>
                            {this.state.scoreInput}
                        </Text>
                        <TouchableOpacity
                            onPress={this.enterScore}
                            activeOpacity={.7}
                            style={styles.enterButton}>
                            <Image
                                style={styles.resizeContain}
                                source={require('./../assets/enterScore.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numberButtonsContainer}>
                        <TouchableOpacity
                            onPress={() => this.addNumber("7")}
                            style={styles.numberButtons}>
                            <Text
                                style={styles.numbersText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.addNumber("8")}
                            style={styles.numberButtons}>
                            <Text
                                style={styles.numbersText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.addNumber("9")}
                            style={styles.numberButtons}>
                            <Text
                                style={styles.numbersText}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numberButtonsContainer}>
                        <TouchableOpacity
                            onPress={() => this.addNumber("4")}
                            style={styles.numberButtons}>
                            <Text
                                style={styles.numbersText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.addNumber("5")}
                            style={styles.numberButtons}>
                            <Text
                                style={styles.numbersText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.addNumber("6")}
                            style={styles.numberButtons}>
                            <Text
                                style={styles.numbersText}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numberButtonsContainer}>
                        <TouchableOpacity
                            onPress={() => this.addNumber("1")}
                            style={styles.numberButtons}>
                            <Text
                                style={styles.numbersText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.addNumber("2")}
                            style={styles.numberButtons}>
                            <Text
                                style={styles.numbersText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.addNumber("3")}
                            style={styles.numberButtons}>
                            <Text
                                style={styles.numbersText}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numberButtonsContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Stats")}
                            style={styles.numberButtons}>
                            <Image
                                style={styles.resizeContain2}
                                source={require('./../assets/statsButton.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.addNumber("0")}
                            style={styles.numberButtons}>
                            <Text
                                style={styles.numbersText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.removeNumber}
                            style={styles.numberButtons}>
                            <Image
                                style={styles.resizeContain2}
                                source={require('./../assets/backspace.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topHalf: {
        flex: 1,
        width: '100%'
    },
    withMargin: {
        flex: 1,
        marginTop: STATUSBARHEIGHT,
        backgroundColor: colors.salmon
    },
    bottomHalf: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.salmon
    },
    scoreInputBar: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 4,
        borderBottomWidth: 4
    },
    scoreInputText: {
        flex: 5,
        fontSize: 44,
        color: colors.gray,
        textAlign: 'center'
    },
    undoButton: {
        flex: 1,
        backgroundColor: colors.orange,
        borderRadius: 15,
        padding: 8,
        paddingHorizontal: 30,
    },
    enterButton: {
        flex: 1,
        backgroundColor: colors.green,
        borderRadius: 15,
        padding: 8,
        paddingHorizontal: 30,
    },
    resizeContain: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },
    resizeContain2: {
        resizeMode: 'contain',
        height: '70%',
        width: '70%'
    },

    numberButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '0.3%'
    },
    numberButtons: {
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        width: '33.1%'
    },
    numbersText: {
        fontSize: 30,
        color: colors.white
    },
    gameVariant: {
        backgroundColor: colors.white,
        alignItems: 'center',
        borderBottomWidth: 4
    },
    gameVariantText: {
        fontSize: 30,
        color: colors.gray,
    },
    scoresPlayersActive: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.green,
        borderBottomWidth: 4
    },
    score: {
        flex: 4,
        alignItems: 'center'
    },
    sets: {
        flex: 1,
        borderLeftWidth: 4,
        borderRightWidth: 4,
        alignItems: 'center'
    },
    legs: {
        flex: 1,
        alignItems: 'center'
    },
    sets2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 4,
        borderRightWidth: 4,
    },
    legs2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    matchScoreTextActive: {
        fontSize: 44,
    },
    inactive: {
        backgroundColor: colors.lightgreen,
    },
    inactiveText: {
        opacity: .4
    }


});