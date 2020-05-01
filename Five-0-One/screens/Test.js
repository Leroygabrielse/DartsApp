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
            numberOfLegs: 4,
            bestOfFirstTo: 'FIRST TO ',
            legsOrSets: ' SETS',
            buttonStyleFirst: styles.firstToButtonsActive,
            buttonStyleBest: styles.bestOfButtonsInactive,
            textStyleFirst: styles.firstToTextActive,
            textStyleBest: styles.firstToTextInactive,
            buttonStyleSets: styles.bestOfButtonsActive,
            buttonStyleLegs: styles.firstToButtonsInactive,

            textStyleLegs: styles.firstToTextInactive,
            textStyleSets: styles.firstToTextActive,

            placeholderText: "Number Of Sets",

            zIndex: -1,
            opacity: 0,

            beginScore: 501,
            fiveBG: colors.orange,
            threeBG: colors.lightgray,
            sevenBG: colors.lightgray,
            customBG: colors.lightgray
        }
    }
    startGame = () => {

        if ((this.state.numberOfLegs % 2 == 0) && this.state.bestOfFirstTo == 'BEST OF ') {
            Alert.alert("Not A Possible Game", "Best of requires a uneven amount of legs/sets")
        } else {
            this.props.navigation.navigate('501',
                [this.state.player1,
                this.state.player2,
                this.state.bestOfFirstTo,
                this.state.numberOfLegs,
                this.state.legsOrSets, 
                this.state.beginScore])
        }
    }
    makeActive = (button) => {
        switch (button) {
            case "bestof":
                this.setState({ buttonStyleBest: styles.bestOfButtonsActive })
                this.setState({ textStyleBest: styles.firstToTextActive })
                this.setState({ buttonStyleFirst: styles.firstToButtonsInactive })
                this.setState({ textStyleFirst: styles.firstToTextInactive })
                this.setState({ bestOfFirstTo: "BEST OF " })
                break;
            case "firstto":
                this.setState({ buttonStyleBest: styles.bestOfButtonsInactive })
                this.setState({ textStyleBest: styles.firstToTextInactive })
                this.setState({ buttonStyleFirst: styles.firstToButtonsActive })
                this.setState({ textStyleFirst: styles.firstToTextActive })
                this.setState({ bestOfFirstTo: "FIRST TO " })
                break;
            case "sets":
                this.setState({ buttonStyleSets: styles.bestOfButtonsActive })
                this.setState({ buttonStyleLegs: styles.firstToButtonsInactive })
                this.setState({ textStyleSets: styles.firstToTextActive })
                this.setState({ textStyleLegs: styles.firstToTextInactive })
                this.setState({ legsOrSets: " SETS" })
                this.setState({ placeholderText: "Number Of Sets" })
                break;
            case "legs":
                this.setState({ buttonStyleSets: styles.bestOfButtonsInactive })
                this.setState({ buttonStyleLegs: styles.firstToButtonsActive })
                this.setState({ textStyleSets: styles.firstToTextInactive })
                this.setState({ textStyleLegs: styles.firstToTextActive })
                this.setState({ legsOrSets: " LEGS" })
                this.setState({ placeholderText: "Number Of Legs" })
                break;
        }
    }
    changeScore = () => {
        console.log("Change Score method has to be made yet")
        this.setState({ zIndex: 1 })
        this.setState({ opacity: 1 })
    }
    xClick = () => {
        this.setState({ zIndex: -1 })
        this.setState({ opacity: 0 })
    }
    setColor = () => {
        this.setState({fiveBG: colors.lightgray})
        this.setState({sevenBG: colors.lightgray})
        this.setState({customBG: colors.orange})
        this.setState({threeBG: colors.lightgray})
    }
    setBeginScore = (number) =>{
        this.setState({beginScore: number})
        if (number == 501){
            this.setState({fiveBG: colors.orange})
            this.setState({sevenBG: colors.lightgray})
            this.setState({customBG: colors.lightgray})
            this.setState({threeBG: colors.lightgray})
        }else if (number == 301){
            this.setState({threeBG: colors.orange})
            this.setState({fiveBG: colors.lightgray})
            this.setState({sevenBG: colors.lightgray})
            this.setState({customBG: colors.lightgray})

        }else if (number == 701){
            this.setState({sevenBG: colors.orange})
            this.setState({fiveBG: colors.lightgray})
            this.setState({threeBG: colors.lightgray})
            this.setState({customBG: colors.lightgray})

        } else if (number > 1001){
            Alert.alert("Number too big", "Max is 1001")
            this.setState({beginScore: number})
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ ...styles.selector, zIndex: this.state.zIndex, opacity: this.state.opacity }}>
                    <View style = {{flex:0.6, alignItems: 'flex-end', paddingRight:15, paddingTop: 10}}>
                    <TouchableOpacity 
                    onPress={this.xClick}>
                        <Text style={{ fontSize: 44, color: colors.lightgray }}>X</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity 
                    style = {{...styles.buttonsInChanger, backgroundColor: this.state.fiveBG , marginTop: '5%'}}
                    onPress = {()=>this.setBeginScore(501)}>
                        <Text style = {{fontSize: 44, marginTop: "3.5%"}}>501</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style = {{...styles.buttonsInChanger, backgroundColor: this.state.threeBG}}
                    onPress = {()=>this.setBeginScore(301)}>
                        <Text style = {{fontSize: 44}}>301</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style = {{...styles.buttonsInChanger,backgroundColor: this.state.sevenBG}}
                    onPress = {()=>this.setBeginScore(701)}>
                        <Text style = {{fontSize: 44}}>701</Text>
                    </TouchableOpacity>
                    <View style = {{...styles.buttonsInChanger, backgroundColor: this.state.customBG,flex: 2, marginBottom: 25}}>
                    <Text style={{fontSize: 24, marginBottom: 5}}>Or enter a custom score</Text>
                    <TextInput 
                    style={{backgroundColor: colors.white, width: '90%', padding: 15, borderRadius: 15, marginBottom: 5}}
                    onChangeText={(beginScore)=>this.setBeginScore(beginScore)}
                    onTouchStart={this.setColor}
                    placeholder="Enter Score" />
                    
                    </View><TouchableOpacity style={styles.goButton}
                    onPress={this.xClick}
                    >
                        <Text style={{fontSize: 30, color: colors.white, textAlign: 'center'}}>GO</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.gameScoreStart}>
                    <Text style={{ flex: 1 }}></Text>
                    <Text style={styles.gameText}>{this.state.beginScore}</Text>
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
        alignItems: 'center',
    },
    selector: {
        flex: 1,
        top: 84,
        width: '90%',
        height: '80%',
        position: "absolute",
        backgroundColor: colors.gray,
        borderRadius: 15,
    },
    buttonsInChanger: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightgray,
        marginHorizontal: '5%',
        marginBottom: '2%',
        borderRadius: 15,
        borderWidth: 4,
    },
    goButton: {
        backgroundColor: colors.green,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding:10
    }
});