import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity, Image, Alert } from 'react-native';
import colors from '../assets/Colors'

const STATUSBARHEIGHT = Platform.OS === 'ios' ? 20 : 0

export default class Game501 extends React.Component {
    constructor(props) {
        super(props)
        this.enterScore2=this.enterScore2.bind(this)
        this.state = {
            scoreInput: 0,
            playerName1: "Leroy",
            playerName2: 'Thomas',
            gameVariant: 'FIRST TO 5 LEGS',
            numberOfLegsToWin: this.props.route.params["numberOfLegs"] - 1,
            bestOfFirstTo: this.props.route.params["bestOfFirstTo"],
            setsP1: 0,
            legsP1: 0,
            setsP2: 0,
            legsP2: 0,
            scoreP1: 501,
            scoreP2: 501,
            p1style: styles.matchScoreTextActive,
            p1style2: styles.scoresPlayersActive,
            p2style: styles.matchScoreTextInactive,
            p2style2: styles.scoresPlayersInactive,
            playerTurn: 1
        }
    }
    handleScore=(score,playerScore)=>{
        if (score > 180 | score > playerScore | score == 166 | score == 169 | score == 172 | score == 173 | score == 175 | score == 176 | score == 178 | score == 179) {
            Alert.alert("Warning", "Not a possible score!")
            this.setState({ scoreInput: 0 })
        }
        else {
            
        }
    }
    enterScore2 = () => {
        //work with a class of class Player etc.
        if(this.state.playerTurn == 1){
            this.handleScore(this.state.scoreInput,this.state.scoreP1)
        }
        else if (this.playerTurn == 2){
            this.handleScore(this.state.scoreInput,this.state.scoreP2)
        }
    }
    
    addNumber = (number) => {
        if (this.state.scoreInput == 0) {
            this.setState({ scoreInput: number })
        }
        else {
            var newScore = this.state.scoreInput
            newScore += number
            if (newScore < 999) {
                this.setState({ scoreInput: newScore })
            }

        }
    }
    removeNumber = () => {
        var str = ""+this.state.scoreInput
        var res = str.substring(0,str.length - 1)
        if (res.length > 0){
            this.setState({scoreInput: res})
        }
        else {
            this.setState({scoreInput: 0})
        }
        
    }
    undoScore = () => {
        console.log("undo Score")
    }

    render() {

const {player1} = this.props.route.params
const {player2} = this.props.route.params
const {numberOfLegs} = this.props.route.params
const {bestOfFirstTo} = this.props.route.params
const {legsOrSets} = this.props.route.params

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#5DA271' />
                <View style={styles.topHalf}>
                    <View style={styles.withMargin}>
                        <View style={styles.gameVariant}>
                            <Text style={styles.gameVariantText}>{bestOfFirstTo+" "+numberOfLegs+ " "+ legsOrSets}</Text></View>
                        <View style={this.state.p1style2}>
                            <View style={styles.score}>
                                <Text>{player1}</Text>
                                <View style={{ flex: 1, justifyContent: 'center' }}><Text style={this.state.p1style}>{this.state.scoreP1}</Text></View>
                                <Text></Text>
                            </View>
                            <View style={styles.sets}>
                                <Text>SETS</Text>
                                <View style={{ flex: 1, justifyContent: 'center' }}><Text style={this.state.p1style}>{this.state.setsP1}</Text></View>
                                <Text></Text>

                            </View>
                            <View style={styles.legs}>
                                <Text>LEGS</Text>
                                <View style={{ flex: 1, justifyContent: 'center' }}><Text style={this.state.p1style}>{this.state.legsP1}</Text></View>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={this.state.p2style2}>
                            <View style={styles.score}>
                                <Text>{player2}</Text>
                                <View style={{ flex: 1, justifyContent: 'center' }}><Text style={this.state.p2style}>{this.state.scoreP2}</Text></View>
                                <Text></Text>
                            </View>
                            <View style={styles.sets2}><Text style={this.state.p2style}>{this.state.setsP2}</Text></View>
                            <View style={styles.legs2}><Text style={this.state.p2style}>{this.state.legsP2}</Text></View>
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
                            onPress={this.enterScore2}
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
        padding: 8
    },
    enterButton: {
        flex: 1,
        backgroundColor: colors.green,
        borderRadius: 15,
        padding: 8
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
    scoresPlayersInactive: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.lightgreen,
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
    matchScoreTextInactive: {
        fontSize: 44,
        color: colors.gray
    },
    matchScoreTextActive: {
        fontSize: 44,
    },


});

/*
enterScore = () => {
        switch (this.state.playerTurn) {
            case 1:

                if (this.state.scoreInput > 180 | this.state.scoreInput > this.state.scoreP1) {
                    Alert.alert("Notification", "Not a possible score!")
                    this.setState({ scoreInput: 0 })
                }
                else {
                    this.setState({ scoreP1: this.state.scoreP1 - this.state.scoreInput })
                    if (this.state.scoreP1 - this.state.scoreInput === 0) {
                        //Leg won
                        
                        this.setState({ scoreP1: 501 })
                        this.setState({ scoreP2: 501 })
                        this.setState({ scoreInput: 0 })
                        this.setState({ legsP1: this.state.legsP1 + 1 })

                        switch(this.state.bestOfFirstTo){
                            case 'BEST OF':
                                if (this.state.legsP1 > (this.state.numberOfLegsToWin / 2)) {
                                    Alert.alert("Notification","GameShot and the Match!",[{text: "Finish", onPress: ()=>this.props.navigation.navigate("pre Game")}])
                                } else {
                                    Alert.alert("Notification", "GameShot!")
                                    console.log(this.state.legsP1)
                                }
                                break;
                            case 'FIRST TO':
                                if (this.state.legsP1 == this.state.numberOfLegsToWin) {
                                    Alert.alert("Notification","GameShot and the Match!",[{text: "Finish", onPress: ()=>this.props.navigation.navigate("pre Game")}])
                                } else {
                                    Alert.alert("Notification", "GameShot!")
                                    console.log(this.state.legsP1)
                                }
                                break;
                        }
                    }
                    else {
                        this.setState({ scoreInput: 0 })
                        this.setState({ playerTurn: this.state.playerTurn + 1 })
                        this.setState({ p1style: styles.matchScoreTextInactive })
                        this.setState({ p1style2: styles.scoresPlayersInactive })
                        this.setState({ p2style: styles.matchScoreTextActive })
                        this.setState({ p2style2: styles.scoresPlayersActive })
                    }
                }


                break;
            case 2:
                if (this.state.scoreInput > 180 | this.state.scoreInput > this.state.scoreP2) {
                    Alert.alert("Notificatie", "Ongeldige score!")
                    this.setState({ scoreInput: 0 })
                }
                else {
                    this.setState({ scoreP2: this.state.scoreP2 - this.state.scoreInput })
                    if (this.state.scoreP2 - this.state.scoreInput === 0) {
                        //Leg won
                        
                        this.setState({ scoreP1: 501 })
                        this.setState({ scoreP2: 501 })
                        this.setState({ scoreInput: 0 })
                        this.setState({ legsP2: this.state.legsP2 + 1 })
                        if (this.state.legsP2 == this.state.numberOfLegsToWin) {
                            Alert.alert("Notification","GameShot and the Match!",[{text: "Finish", onPress: ()=>this.props.navigation.navigate("pre Game")}])
                        }
                        else {
                            Alert.alert("Notification", "GameShot!")
                        }
                    }
                    else {
                        this.setState({ scoreInput: 0 })
                        this.setState({ playerTurn: this.state.playerTurn - 1 })
                        this.setState({ p2style: styles.matchScoreTextInactive })
                        this.setState({ p2style2: styles.scoresPlayersInactive })
                        this.setState({ p1style: styles.matchScoreTextActive })
                        this.setState({ p1style2: styles.scoresPlayersActive })
                    }
                }


                break;
        }
    }
    */