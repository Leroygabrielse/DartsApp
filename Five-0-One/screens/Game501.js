import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, Alert } from 'react-native';
import colors from '../assets/Colors'

const STATUSBARHEIGHT = Platform.OS === 'ios' ? 20 : 0
const SCOREHINTS = {
    170: "(T20, T20, BULL)",
    167: "(T20, T19, BULL)",
    164: "(T20, T18, BULL)",
    161: "(T20, T17, BULL)",
    160: "(T20, T20, D20)",
    158: "(T20, T20, D19)",
    157: "(T20, T19, D20)",
    156: "(T20, T20, D18)",
    155: "(T20, T15, BULL)",
    154: "(T20, T18, D20)",
    153: "(T20, T19, D18)",
    152: "(T20, T20, D16)",
    151: "(T20, T17, D20)",
    150: "(T20, T18, D18)",
    149: "(T20, T19, D16)",
    148: "(T20, T16, D20)",
    147: "(T20, T17, D18)",
    146: "(T20, T18, D16)",
    145: "(T20, T15, D20)",
    144: "(T20, T20, D12)",
    143: "(T20, T17, D16)",
    142: "(T20, T14, D20)",
    141: "(T20, T15, D18)",
    140: "(T20, T16, D16)",
    139: "(T20, T13, D20)",
    138: "(T20, T14, D18)",
    137: "(T17, T18, D16)",
    136: "(T20, T20, D8)",
    135: "(T20, T15, D15)",
    134: "(T20, T14, D16)",
    133: "(T20, T18, D8)",
    132: "(T20, T20, D6)",
    131: "(T20, T13, D16)",
    130: "(T20, T18, D8)",
    129: "(T19, T20, D6)",
    128: "(T18, T14, D16)",
    127: "(T19, T18, D8)",
    126: "(T19, T19, D6)",
    125: "(T19, T16, D10)",
    124: "(T20, D16, D16)",
    123: "(T19, T16, D9)",
    122: "(T18, T20, D4)",
    121: "(T20, T15, D8)",
    120: "(T20, 20, D20)",
    119: "(T19, T10, D16)",
    118: "(T20, 18, D20)",
    117: "(T20, 17, D20)",
    116: "(T20, 16, D20)",
    115: "(T20, 15, D20)",
    114: "(T20, 14, D20)",
    113: "(T20, 13, D20)",
    112: "(T20, 20, D16)",
    111: "(T20, 19, D16)",
    110: "(T20, 18, D16)",
    109: "(T20, 17, D16)",
    108: "(T20, 16, D16)",
    107: "(T19, 18, D16)",
    106: "(T20, 14, D16)",
    105: "(T20, 13, D16)",
    104: "(T18, 18, D16)",
    103: "(T20, 11, D16)",
    102: "(T20, 10, D16)",
    101: "(T17, 18, D16)",
    100: "(T20, D20)",
    99: "(T19, 10, D16)",
    98: "(T20, D19)",
    97: "(T19, D20)",
    96: "(T20, D18)",
    95: "(T15, 18, D19)",
    94: "(T18, D20)",
    93: "(T19, D18)",
    92: "(T20, D16)",
    91: "(T17, D20)",
    90: "(T18, D18)",
    89: "(T19, D16)",
    88: "(T16, D20)",
    87: "(T17, D18)",
    86: "(T18, D16)",
    85: "(T15, D20)",
    84: "(T20, D12)",
    83: "(T17, D16)",
    82: "(T14, D20)",
    81: "(T15, D18)",
    80: "(T16, D16)",
    79: "(T13, D20)",
    78: "(T14, D18)",
    77: "(T15, D16)",
    76: "(T20, D8)",
    75: "(T15, D15)",
    74: "(T14, D16)",
    73: "(T19, D8)",
    72: "(T20, D6)",
    71: "(T13, D16)",
    70: "(T18, D8)",
    69: "(T19, D6)",
    68: "(T16, D10)",
    67: "(T17, D8)",
    66: "(T10, D18)",
    65: "(T15, D10)",
    64: "(D16, D16)",
    63: "(T13, D12)",
    62: "(T10, D16)",
    61: "(T15, D8)",
    60: "(20 ,D20)",
    59: "(19 ,D20)",
    58: "(18 ,D20)",
    57: "(17 ,D20)",
    56: "(16 ,D20)",
    55: "(15 ,D20)",
    54: "(14 ,D20)",
    53: "(13 ,D20)",
    52: "(20 ,D16)",
    51: "(19 D16)",
    50: "(BULL)",
    49: "(17,D16)",
    48: "(16, D16)",
    47: "(15,16)",
    46: "(14,16)",
    45: "(13,16)",
    44: "(12,16)",
    43: "(11,16)",
    42: "(10, D16)",
    41: "(9, D16)",
    40: "(D20)",
    39: "(7, D16)",
    38: "(D19)",
    37: "(5, D16)",
    36: "(D18)",
    35: "(3, D16)",
    34: "(D17)",
    33: "(1, D16)",
    32: "(D16)",
    31: "(15, D8)",
    30: "(D15)",
    29: "(13, D8)",
    28: "(D14)",
    27: "(11, D8)",
    26: "(D13)",
    25: "(9, D8)",
    24: "(D12)",
    23: "(7, D8)",
    22: "(D11)",
    21: "(5, D8)",
    20: "(D10)",
    19: "(3, D8)",
    18: "(D9)",
    17: "(1, D8)",
    16: "(D8)",
    15: "(7, D4)",
    14: "(D7)",
    13: "(5, D4)",
    12: "(D6)",
    11: "(3, D4)",
    10: "(D5)",
    9: "(1, D4)",
    8: "(D4)",
    7: "(3, D2)",
    6: "(D3)",
    5: "(1, D2)",
    4: "(D2)",
    3: "(1, D1)",
    2: "(D1)",
}

function Player(name, score) {
    return {
        name,
        score,
        legs: 0,
        sets: 0
    }
}
export default class Game501 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            PLAYER_1: Player(this.props.route.params[0], this.props.route.params[5]),
            PLAYER_2: Player(this.props.route.params[1], this.props.route.params[5]),
            legBeginner: 0,
            playerTurn: 0,
            scoreInput: 0,
            player1Style: { ...styles.scoresPlayersActive },
            player2Style: { ...styles.scoresPlayersActive, ...styles.inactive },
            player1TextStyle: { ...styles.matchScoreTextActive },
            player2TextStyle: { ...styles.matchScoreTextActive, ...styles.inactiveText },
            gameVariant: this.props.route.params[2] + this.props.route.params[3] + this.props.route.params[4],
            winAmount: this.props.route.params[3],
            amountPlayed: 0,
            amountPlayedSets: 0,
            hintText: ''
        }
    }

    legEnd = () => {
        const player = this.state[Object.keys(this.state)[this.state.playerTurn]]

        if (this.props.route.params[4] == ' LEGS') {
            player["legs"] += 1
            this.setState({ playerTurn: ((this.state[Object.keys(this.state)[11]] += 1) % 2) }) //no if else used for setting correct playerturn   
            this.setStyles(((this.state[Object.keys(this.state)[11]]) % 2))
            if (this.props.route.params[2] == 'FIRST TO ') {
                if (player["legs"] == this.state.winAmount) {
                    this.props.navigation.navigate("matchDone")
                }
            }
            else {
                if (player["legs"] > this.state.winAmount / 2) {
                    this.props.navigation.navigate("matchDone")
                }
            }
        } else {
            player["legs"] += 1
            this.setState({ playerTurn: ((this.state[Object.keys(this.state)[11]] += 1) % 2) }) //no if else used for setting correct playerturn   
            this.setStyles(((this.state[Object.keys(this.state)[11]]) % 2))
            if (player["legs"] == 3) {
                player["sets"] += 1
                this.setState({ playerTurn: ((this.state[Object.keys(this.state)[12]] += 1) % 2) }) //no if else used for setting correct playerturn   
                this.setStyles(((this.state[Object.keys(this.state)[12]]) % 2))
                if (this.props.route.params[2] == 'FIRST TO ') {
                    if (player["sets"] == this.state.winAmount) {
                        this.props.navigation.navigate("matchDone")
                    }
                }
                else {
                    if (player["sets"] > this.state.winAmount / 2) {
                        this.props.navigation.navigate("matchDone")
                    }
                }
                this.resetSet()
            }
        }
    }
    resetSet = () => {
        this.state[Object.keys(this.state)[0]]["score"] = this.props.route.params[5]
        this.state[Object.keys(this.state)[1]]["score"] = this.props.route.params[5]
        this.state[Object.keys(this.state)[0]]["legs"] = 0
        this.state[Object.keys(this.state)[1]]["legs"] = 0,
            this.state[Object.keys(this.state)[11]] = 0
    }
    resetLeg = () => {
        this.state[Object.keys(this.state)[0]]["score"] = this.props.route.params[5]
        this.state[Object.keys(this.state)[1]]["score"] = this.props.route.params[5]
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
    setStyles = (playerTurn) => {
        if (playerTurn == 0) {
            this.setState({ player1Style: { ...styles.scoresPlayersActive } })
            this.setState({ player1TextStyle: { ...styles.matchScoreTextActive } })
            this.setState({ player2Style: { ...styles.scoresPlayersActive, ...styles.inactive } })
            this.setState({ player2TextStyle: { ...styles.matchScoreTextActive, ...styles.inactiveText } })
        } else {
            this.setState({ player2Style: { ...styles.scoresPlayersActive } })
            this.setState({ player2TextStyle: { ...styles.matchScoreTextActive } })
            this.setState({ player1Style: { ...styles.scoresPlayersActive, ...styles.inactive } })
            this.setState({ player1TextStyle: { ...styles.matchScoreTextActive, ...styles.inactiveText } })
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
        const player = this.state[Object.keys(this.state)[this.state.playerTurn]]
        const enteredScore = this.state.scoreInput

        if (player["score"] - enteredScore == 0) {
            this.legEnd()
            this.resetLeg()
            this.setState({ scoreInput: 0 })
        } else if (player["score"] - enteredScore < 0) {
            Alert.alert("Not A Possible Score!", "You can't throw that, if you bust just click on enter or enter a 0")
            this.setState({ scoreInput: 0 })
        } else {
            player["score"] -= enteredScore
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
                                <Text style={{ flex: 1 }}>{this.state.PLAYER_1["name"]}</Text>
                                <View style={{ flex: 1, justifyContent: 'center' }}><Text style={this.state.player1TextStyle}>{this.state.PLAYER_1["score"]}</Text></View>
                                <Text style={{ flex: 1 }}>{SCOREHINTS[""+this.state.PLAYER_1["score"]]}</Text>
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
                                <Text style={{ flex: 1 }}>{this.state.PLAYER_2["name"]}</Text>
                                <View style={{ flex: 1, justifyContent: 'center' }}><Text style={this.state.player2TextStyle}>{this.state.PLAYER_2["score"]}</Text></View>
                                <Text style={{ flex: 1 }}>{SCOREHINTS[""+this.state.PLAYER_2["score"]]}</Text>
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