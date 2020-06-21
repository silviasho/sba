import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Card from "../Card"
import Input from '../Inout'

export default function StartGameScreen(props) {
    const [enteredValue, setEnterdValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    function confirmInputValue(input) {
        setEnterdValue(input.replace(/[^0-9]/g, ""))
    }

    function confirm() {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber <= 0) {
            Alert.alert("invalid number", "number has to be between 1 and 99 ", [{ text: "ok", style: "cancel", onPress: resetInputValue }])
            return
        }
        setConfirmed(true)
        setEnterdValue('')
        setSelectedNumber(chosenNumber)
        Keyboard.dismiss()

    }

    let confirmedOutput

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.chosenNumberContainer}>

                <Text>chosen Number</Text>
                <View style={styles.numberContainer}><Text> {selectedNumber}</Text></View>

                
                    <Button title="start game" onPress={()=>onStartGame(selectedNumber)} color="grey"/>
                
            </Card>
        )

    }

    function resetInputValue() {
        setConfirmed(false)
        setEnterdValue("")
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>START GAME</Text>
                <Card style={styles.gameContainer}>
                    <Text>select a Number</Text>
                    <Input style={styles.input}
                        keyboardType="number-pad"
                        blurOnSubmit
                        maxLength={2}
                        onChangeText={confirmInputValue}
                        value={enteredValue}
                    />
                    <View style={styles.btnGruop}>
                        <View style={styles.btn} >
                            <Button title="Reset" onPress={resetInputValue} color="grey" />
                        </View>
                        <View style={styles.btn}>
                            <Button onPress={confirm} title="Confirm" color="pink" onPress={confirm} />

                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",

    },
    btnGruop: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-between",
        paddingHorizontal: 10,

    },
    gameContainer: {
        width: 300,
        maxWidth: "80%",
        borderRadius: 9,
        marginTop: 10
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    btn: {


        width: "45%",

    },
    btnStart:{},

    input: {
        width: "25%",
        textAlign: "center"
    },
    chosenNumberContainer: {
        width: 300,
        maxWidth: "60%",
        borderRadius: 19,
        marginTop: 10,
        backgroundColor:"pink"

    },
    numberContainer: {

        borderWidth: 2,
        padding: 10,
        margin: 5,
        borderRadius: 8,
        shadowColor: "grey",
        paddingRight: 12
    }



})